import React from 'react';

export const UserListContext = React.createContext({ userList: [] });

export const ConversationContext = React.createContext({
  conversationId: null,
  setConversationId: () => {}, 
});
