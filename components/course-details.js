import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
export default function CourseDetails({ route }) {
  const { courseId } = route.params;
  return (
    <ScrollView style={styles.container}>
      {courseId === 1 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
            Front End Development With Angular
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge"></Text>
              <Text variant="bodyMedium">
                This Angular Certification Training Course will help you master
                front-end web development with Angular. Gain in-depth knowledge
                of concepts like facilitating the development of single-page web
                applications, dependency injection, typescript, components, and
                directives with this Angular Training Course.
              </Text>
            </Card.Content>
          </Card>
          <Card style={{ marginVertical: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">Overview</Text>
              <Text variant="bodyMedium" style={{ marginVertical: 20 }}>
                Angular is a javascript-based open-source front-end framework
                which has reusable and modular components which makes this a
                development platform for building mobile and desktop web
                apps.The course takes you right from basics to go all the way by
                creating your own web applications.
              </Text>
              <Text variant="bodyMedium">
                This training program concentrates mainly on Javascript based
                front-end frameworks Angular. Typescript features will be
                introduced in the context of Angular as part of the exercises.
                You will also get an introduction to Fundamentals of HTML, CSS,
                Javascript and the use of Angular Flex-Layout for responsive UI
                design, wireframe and mock screen designing with Figma and Adobe
                XD. You will be introduced to various aspects of Angular
                including components, directives, services, pipes, lazyloading,
                etc. You will learn about data binding, Angular router and its
                use for developing single-page applications. You will also learn
                about designing both template-driven forms and reactive forms. A
                quick introduction to Observables, reactive programming and RxJS
                in the context of Angular is included. You will then learn about
                Angular support for client-server communication through the HTTP
                client and the use of REST API on the server side.
              </Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 2 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
            Front End Development With React
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge"></Text>
              <Text variant="bodyMedium">
                This Front End Development with React JS Training Course will
                help you master the fundamentals of HTML, CSS, Javascript ,
                React—an important web framework for developing user
                interfaces—including JSX, props, state, and events. This
                training course dives into Redux, covering topics like reducers,
                actions, and the state tree.
              </Text>
            </Card.Content>
          </Card>
          <Card style={{ marginVertical: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">Overview</Text>
              <Text variant="bodyMedium" style={{ marginVertical: 20 }}>
                This course explores Javascript based front-end application
                development, and in particular the React library. This course
                will use JavaScript ES6 for developing React application. You
                will also get an introduction to the use of Reactstrap for
                Bootstrap 4-based responsive UI design. You will be introduced
                to various aspects of React components. You will learn about
                React router and its use in developing single-page applications.
                You will also learn about designing controlled forms. You will
                be introduced to the Flux architecture and Redux. You will
                explore various aspects of Redux and use it to develop
                React-Redux powered applications. You will then learn to use
                Fetch for client-server communication and the use of REST API on
                the server side. A quick tour through React animation support
                and testing rounds off the course. You must have preferably
                completed the previous course in the specialization on Bootstrap
                4, or have a working knowledge of Bootstrap 4 to be able to
                navigate this course. Also a good working knowledge of
                JavaScript, especially ES 5 is strongly recommended..
              </Text>
              <Text variant="bodyMedium">
                At the end of this course you will: - Be familiar with
                client-side Javascript application development and the React
                library - Be able to implement single page applications in React
                - Be able to use various React features including components and
                forms - Be able to implement a functional front-end web
                application using React - Be able to use Reactstrap for
                designing responsive React applications - Be able to use Redux
                to design the architecture for a React-Redux application
              </Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 3 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
            Fullstack Development -MEAN/MERN Stack
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge"></Text>
              <Text variant="bodyMedium">
                This Full Stack Development-MEAN/MERN Training Program is
                designed to give you an essence of front-end, middleware, and
                back-end nodejs, javascript web developer technologies. You will
                learn to build an end-to-end application, test and deploy code,
                store data using MongoDB, and much more
              </Text>
            </Card.Content>
          </Card>
          <Card style={{ marginVertical: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">Overview</Text>
              <Text variant="bodyMedium" style={{ marginVertical: 20 }}>
                Full-Stack Development-MEAN/MERN stack is a modern approach to
                building dynamic web applications. It is an open-source
                JavaScript framework that harnesses four major technologies:
                MongoDB, Express, Angular/React, and Node.js. Given the
                ever-increasing demand for full-stack JavaScript developers,
                this course will help you master both front-end and back-end
                development.
              </Text>
              <Text variant="bodyMedium">
                The course will begin with teaching you how to build your own
                application with plain JavaScript and the fundamentals of web
                development (HTML, CSS, and JavaScript). You will understand how
                Node can be used to execute JavaScript code at the back end and
                the powerful applicability of Node when used with the Express
                framework and MongoDB. Further, you will learn how to use the
                front-end framework with Angular or liberary like REACT for
                building client applications and user interfaces. Later, you
                will become familiar with building REST APIs with tools such as
                Postman By the end of this course, you will be able to
                successfully build secure web applications with the most
                advanced and updated JavaScript frameworks.
              </Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 4 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
          Mobile App Development
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Comming Soon</Text>
              <Text variant="bodyMedium"></Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 5 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
          Machine Learning
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Comming Soon</Text>
              <Text variant="bodyMedium"></Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 6 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
          Robotics
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Comming Soon</Text>
              <Text variant="bodyMedium"></Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 7 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
          Digital Marketing
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Comming Soon</Text>
              <Text variant="bodyMedium"></Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {courseId === 8 && (
        <View>
          <Text style={{ fontSize: 30, marginVertical: 20 }}>
          Graphic Designing
          </Text>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Comming Soon</Text>
              <Text variant="bodyMedium"></Text>
            </Card.Content>
          </Card>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
