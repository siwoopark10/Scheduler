import React, {useState} from 'react';
import Course from './Course';
import {View, StyleSheet} from 'react-native';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';


const CourseSelector = ({courses}) => {
    const [selected, setSelected] = useState([]);
  
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
      ));

    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (
            <Course key={course.id} course={course} 
                isDisabled={hasConflict(course, selected)}
                select={toggle} isSelected={selected.includes(course)}
            />
          ))
        }
      </View>
    );
  };

  const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
})

  export default CourseSelector;