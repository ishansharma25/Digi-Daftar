import os
import base64
import pandas as pd
import streamlit as st
from streamlit_chat import message
from streamlit_option_menu import option_menu
from PIL import Image
from tempfile import NamedTemporaryFile
from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    MessagesPlaceholder,
)
from langchain.schema import (
    SystemMessage,
    HumanMessage,
    AIMessage
)
from langchain.chains import LLMChain
from langchain_core.messages import SystemMessage
from langchain_groq import ChatGroq
from langchain.chains.conversation.memory import ConversationBufferWindowMemory

def main():
    system_prompt = 'How can I assist you further'
    groq_api_key = ""
    model = 'llama3-8b-8192' 
    conversational_memory_length = 5
    memory = ConversationBufferWindowMemory(k=conversational_memory_length, memory_key="chat_history", return_messages=True)   
    page_bg_img = """
     <style>
    [data-testid="stAppViewContainer"] {
   
    .chat {
    display: flex;
    font-family: var(--font),"Segoe UI","Roboto","sans-serif";
    width: 100%;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
     }
    
    </style>
    """    

    icon_text = f"""
    <div >
       <span style='font-size: 32px;'>LACETRACE</span>
    """
    st.set_page_config(page_title="Diggie")
    st.title("Hey I am Diggie")
    prompt = ChatPromptTemplate.from_messages(
                [
                    SystemMessage(
                        content=system_prompt
                    ),  

                    MessagesPlaceholder(
                        variable_name="chat_history"
                    ),  
                    HumanMessagePromptTemplate.from_template(
                        "{human_input}"
                    ), 
                ]
            )
    groq_chat = ChatGroq(
            groq_api_key=groq_api_key, 
            model_name=model
    )  
    conversation = LLMChain(
            llm=groq_chat,
            prompt=prompt,
            verbose=False,
            memory=memory,
        )


    st.markdown(page_bg_img, unsafe_allow_html=True)
 
    if "messages" not in st.session_state:
        st.session_state.messages = [
            SystemMessage(content="You are a helpful assistant.")
        ]   
    sidebar = st.sidebar
    sidebar.title("Meet Diggie: Your 24/7 Digital City Assistant! 🤖🏙️")
    sidebar.header("Revolutionize how you interact with city services:")
    col1, col2 = sidebar.columns(2)
    with col1:
        sidebar.subheader("🏠 Permits & Licenses")
        sidebar.write("Apply from home!")
        sidebar.subheader("📝 Complaint Registration")
        sidebar.write("Instant reference numbers")

    with col2:
        sidebar.subheader("🔍 City Services Access")
        sidebar.write("Just a few taps away")

        sidebar.subheader("❓ Quick FAQ Answers")
        sidebar.write("Faster than ever")

    sidebar.markdown("---")
    user_input = sidebar.text_input("User: ", key="user_input")

    if user_input:
        st.session_state.messages.append(HumanMessage(content=user_input))
        with st.spinner("Diggie is Thinking..."):
            response = conversation({"human_input": user_input, "chat_history": st.session_state.messages})
            st.session_state.messages.append(
                AIMessage(content=response["text"]))
    sidebar.markdown("---")
    sidebar.header("With Diggie, you can:")

    sidebar.markdown("""
    - 🏠 Apply for permits and licenses
    - 📝 Register complaints
    - 💻 Access city services
    - ❓ Get quick answers to FAQs
    """)

    sidebar.markdown("---")

    sidebar.info("""
    Say goodbye to queues, hello to efficiency! 
    Diggie helps 24/7.
    A city hall in your pocket.
    """)

    sidebar.markdown("---")

    sidebar.success("Need something? Just ask Diggie!")

    sidebar.header("Your city, simplified.")
    sidebar.header("Your services, streamlined.")
    sidebar.title("The Diggie difference!")
    
  
                   
    messages = st.session_state.get('messages', [])
    for i, msg in enumerate(messages[1:]):
        if i % 2 == 0:
            message(msg.content, is_user=True, key=str(i) + '_user')
        else:
            message(msg.content, is_user=False, key=str(i) + '_ai')


if __name__ == '__main__':
    main()
    