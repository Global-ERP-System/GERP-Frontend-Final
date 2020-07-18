import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true,
      };

      const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor:  '#ff5200',
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: '#ff5200',
        botFontColor: "#fff",
        userBubbleColor: '#138808',
        userFontColor: "#fff"
       };

  const steps = [
        {
          id: "Greet",
          message: "Hello, Welcome",
          trigger: "Ask Name"
        },
        {
          id: "Ask Name",
          message: "Please type your name?",
          trigger: "Waiting user input for name"
        },
        {
          id: "Waiting user input for name",
          user: true,
          trigger: "Asking options"
        },
        {
          id: "Asking options",
          message: "Hi {previousValue}, Glad to know you !!",
          trigger: "Done"
        },
        {
          id: "Done",
          message: "Have a great day !!",
          end: true
        }
    ];
    return (
    <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
    </ThemeProvider>
    );
}
export default CustomChatbot;