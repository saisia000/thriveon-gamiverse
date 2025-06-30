
import { useState, useCallback } from 'react';

export interface ConversationMessage {
  id: string;
  text: string;
  sender: 'user' | 'mythri';
  timestamp: Date;
}

export const useMyThriConversation = () => {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  const addMessage = useCallback((text: string, sender: 'user' | 'mythri') => {
    const newMessage: ConversationMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const clearConversation = useCallback(() => {
    setMessages([]);
  }, []);

  // Placeholder for future AI conversation logic
  const sendMessage = useCallback(async (userMessage: string) => {
    addMessage(userMessage, 'user');
    setIsThinking(true);
    
    // TODO: Implement actual AI conversation logic here
    // This is where you'd call OpenAI, Anthropic, or other AI services
    setTimeout(() => {
      addMessage("I hear you. Let me think about that and guide you gently through this.", 'mythri');
      setIsThinking(false);
    }, 2000);
  }, [addMessage]);

  return {
    messages,
    isThinking,
    addMessage,
    sendMessage,
    clearConversation,
  };
};
