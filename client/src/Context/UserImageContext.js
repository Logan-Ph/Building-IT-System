import { createContext, useState } from 'react';

export const UserImageContext = createContext();

export const UserImageProvider = ({ children }) => {
  const [userImage, setUserImage] = useState();

  return (
    <UserImageContext.Provider value={{ userImage, setUserImage }}>
      {children}
    </UserImageContext.Provider>
  );
};