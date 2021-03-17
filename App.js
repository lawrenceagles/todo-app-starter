import React, { useState } from 'react';
import { Keyboard, Dimensions, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from "styled-components/native";

const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (!task) {
      return;
    }
    Keyboard.dismiss();
    setTasks([...tasks, task]) // using es6 spread operator.
    setTask(null)
  }

  const handleDeleteTask = (taskIndex) => {
    let currTask = [...tasks];
    currTask.splice(taskIndex, 1);
    setTasks(currTask);
  }

  return null;
}

export default App;

