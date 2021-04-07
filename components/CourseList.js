import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector'
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';

const CourseList = ({courses}) => {

  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <CourseSelector courses={termCourses} />
    </View>
  )
}

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
})

export default CourseList;