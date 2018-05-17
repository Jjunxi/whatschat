import React, { Component } from "react";
import "./ChatHistory.css";
import {Spin} from 'antd';


import {connect} from 'react-redux';
import {getMsgList} from '../../redux/chat.redux';

@connect(
	state=>state.chat,
	{getMsgList}
)
class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMsgList(); 
  }
  
  render() {
    return (
      <div className="chat-frame">
        <Spin size="large" className="chat-frame-spin" spinning={false}></Spin>
        <ul className="record-list">
          {/* 聊天记录 */}
        {this.props.match.params.user}
          
          <p>11</p>
          <p>22</p>
          <p>33</p>
        </ul>
      </div>
    );
  }
}

export default ChatHistory;
