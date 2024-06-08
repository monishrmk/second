import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../../components/Header';
import Colors from '../../../styles/Colors';
import FloatedButton from '../../../components/Buttons/FloatedButton/FloatedButton';
import {navigate} from '../../../navigation/NavigationService';
import {GlobalStyles} from '../../../styles/GlobalStyles';
import CustomText from '../../../components/Texts/CustomText';
import AppStyle from '../../../styles/Fonts';
import StringConstants from '../../../utils/StringConstants';
import {wp} from '../../../utils/Dimensions';
import AttachmentsViewer from '../../../components/AttachmentsViewer/AttachmentsViewer';
import GetIcon from '../../../utils/GetIcon';
import {
  cameraIconType,
  checkIconType,
  clockIconType,
  doubleCheckIconType,
  fileUploadIconType,
  hourGlassIconType,
  staffIconType,
} from '../../../helpers/Icons';
import {styles} from './Styles';
import {uploadTypes} from '../../../utils/Constants';
import DocumentPicker from 'react-native-document-picker';
import SvgIcon from '../../../components/SvgIcon/SvgIcon';
import CommonIcons from '../../../assets/images/svg/CommonIcons';
import FileUploadModal from './Components/FileUploadModal';
import {commonSelector} from '../../../store/common/commonSlice';
import {authSelector} from '../../../store/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getStudentAssignmentDetail} from '../../../store/users/userSlice';
import ImageView from 'react-native-image-viewing';
import ApiConstants from '../../../config/ApiConstants';
import SkeletonAssignmentList from '../../FacultyAppScreens/Assignments/Components/SkeletonAssignmentList';

const AssignmentDetails = (props: any) => {
  const AssignmentId = props?.route?.params?.AssignmentId
    ? props?.route?.params?.AssignmentId
    : '';
  const {studentInfo, token} = useAppSelector(authSelector);
  const {isSkeletonLoading} = useAppSelector(commonSelector);
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [showReadMore, setShowReadMore] = useState<boolean>(false);
  const textRef = useRef<Text>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedFile, setPickedFile] = useState([]);
  const [assignmentDetails, setAssignmentDetails] = useState<any>({});
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [selectedDocumentName, setSelectedDocumentName] = useState<string>('');
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const floatingBtnDetails = [
    {
      text: uploadTypes.BROWSE_AND_UPLOAD,
      icon: fileUploadIconType,
    },
    {
      text: uploadTypes.CAMERA,
      icon: cameraIconType,
    },
  ];

  const getStudentClassDetail = () => {
    let userInfo = {
      userData: {
        assignment_id: AssignmentId,
      },
      token: token,
      successFn: (res: any) => {
        setAssignmentDetails(res.results);
        setIsLoading(false);
      },
      failureFn: (err: any) => {
        setIsLoading(false);
        console.log('Error', err);
      },
    };
    dispatch(getStudentAssignmentDetail(userInfo));
  };

  useEffect(() => {
    getStudentClassDetail();
  }, []);

  const openDocumentPicker = async () => {
    try {
      const document = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (document) {
        console.log('Result output --> ', document);
        setPickedFile(document);
        setSelectedDocumentName(document.name);
        setIsModalVisible(true);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker.');
      } else {
        console.log(err);
      }
    }
  };

  const handleFileUpload = () => {
    setSelectedDocumentName(pickedFile[0]?.name || 'attachment_document.pdf');
    setIsFileSelected(true);
    setIsModalVisible(false);
  };
  const handleFileDelete = () => {
    setPickedFile([]);
    setSelectedDocumentName('');
    setIsFileSelected(false);
  };

  const renderAssignmentDetails = (name: string, icon: any, item: any) => {
    return (
      <View style={styles.iconNameRow}>
        <GetIcon {...icon} />
        <CustomText
          numberOfLines={1}
          text={name}
          style={styles.assignmentDetailTextStyle}
        />
      </View>
    );
  };

  return (
    <View style={[GlobalStyles.container]}>
      <Header title={StringConstants.ASSIGNMENT_SCREEN.ASSIGNMENT_DETAILS} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <SkeletonAssignmentList />
        ) : (
          <View style={styles.scrollContainerStyle}>
            <CustomText
              text={assignmentDetails?.assignment_details?.assignment_topic}
              style={styles.assignmentTitleText}
            />

            <View style={styles.courseContainerStyle}>
              <CustomText
                numberOfLines={2}
                text={
                  assignmentDetails?.assignment_details?.cours_details
                    ?.course_title
                }
                style={styles.detailsCourseTextStyle}
              />
            </View>
            {renderAssignmentDetails(
              `${assignmentDetails?.faculty_details_list?.first_name} ${assignmentDetails?.faculty_details_list?.last_name}`,
              staffIconType,
            )}

            {renderAssignmentDetails (
              StringConstants.FACULTY_ADD_ASSIGNMENT.SUBMISSION_DATE +
                (assignmentDetails?.submitted_date !== null
                  ? assignmentDetails?.submitted_date
                  : ''),
              hourGlassIconType,
            )}

            <CustomText
              text={StringConstants.FACULTY_ASSIGNMENTS.DESCRIPTION}
              style={styles.descriptionTextStyle}
            />
            <Text
              ref={textRef}
              style={[
                styles.longText,
                expanded ? styles.expandedText : styles.collapsedText,
              ]}
              numberOfLines={expanded ? undefined : 3}>
              {assignmentDetails?.assignment_details?.instruction}
            </Text>
            <View>
              {assignmentDetails?.assignment_details?.instruction !== null ? (
                <Text style={styles.readMoreTextStyle} onPress={toggleExpand}>
                  {expanded
                    ? StringConstants.FACULTY_ASSIGNMENTS.READ_LESS
                    : StringConstants.FACULTY_ASSIGNMENTS.READ_MORE}
                </Text>
              ) : null}
            </View>
            <CustomText
              text={StringConstants.FACULTY_ASSIGNMENTS.GET_ATTACHMENT_FILE}
              style={styles.getAttachmentTextStyle}
            />

            <AttachmentsViewer
              uri={
                ApiConstants.AWS_BUCKET_URL +
                assignmentDetails?.assignment_details?.assignment_document
              }
              onPressAttachment={() => {
                setIsVisible(true);
              }}
            />

            <CustomText
              text={StringConstants.FACULTY_ASSIGNMENTS.YOUR_ATTACHMENT_STATUS}
              style={styles.getAttachmentTextStyle}
            />
            <View style={styles.attachmentFileOuterContainer}>
              <TouchableOpacity onPress={openDocumentPicker}>
                <View style={styles.attachmentFileInnerContainer}>
                  <View style={styles.fileIconContainer}>
                    <SvgIcon
                      width={styles.fileIconStyle.width}
                      height={styles.fileIconStyle.height}
                      xml={CommonIcons.attachmentFileIcon}
                    />
                  </View>
                  <CustomText
                    text={
                      isFileSelected
                        ? selectedDocumentName
                        : StringConstants.LEAVE_MANAGEMENT.UPLOAD_FILES
                    }
                    numberOfLines={1}
                    ellipsizeMode={'middle'}
                    style={styles.attachmentTextStyle}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleFileDelete}>
                <SvgIcon
                  width={styles.deleteIconStyle.width}
                  height={styles.deleteIconStyle.height}
                  xml={CommonIcons.deleteIcon}
                />
              </TouchableOpacity>
            </View>
            <View>
              {assignmentDetails?.status ? (
                <View style={styles.submittedRow}>
                  <GetIcon {...checkIconType} />
                  <CustomText
                    numberOfLines={1}
                    text={
                      assignmentDetails?.submitted_date !== null
                        ? StringConstants.FACULTY_ASSIGNMENTS.SUBMITTED_AT +
                          assignmentDetails?.submitted_date
                        : StringConstants.FACULTY_ASSIGNMENTS.SUBMITTED
                    }
                    style={styles.submittedTextStyles}
                  />
                  <View style={styles.markContainer}>
                    <CustomText
                      text={assignmentDetails?.mark}
                      style={styles.markText}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.submittedRow}>
                  <Text style={styles.pendingTextStyles}>
                    {StringConstants.FACULTY_ASSIGNMENTS.PENDING}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      </ScrollView>
      <FileUploadModal
        title={StringConstants.FACULTY_ASSIGNMENTS.UPLOAD_ASSIGNMENT}
        isFromPickerSelect={true}
        pickedFileName={pickedFile[0]?.name}
        isVisible={isModalVisible}
        okayBtnName={StringConstants.SUBMIT_SMALL}
        closeModal={() => setIsModalVisible(!isModalVisible)}
        submitBtnAction={handleFileUpload}
      />
      {/* <FloatedButton
        title="Upload"
        floatingBtnData={floatingBtnDetails}
        onPress={btnName => {
          btnName === uploadTypes.BROWSE_AND_UPLOAD
            ? openDocumentPicker()
            : navigate('UploadAssignment');
          console.log('Button Name: ->', btnName);
        }}
      /> */}
      <ImageView
        images={[
          {
            uri:
              ApiConstants.AWS_BUCKET_URL +
              assignmentDetails?.assignment_details?.assignment_document,
          },
        ]}
        imageIndex={0}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
};

export default AssignmentDetails;
