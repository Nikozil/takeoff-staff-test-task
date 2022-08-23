import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
interface ILayout {
  children: ReactNode;
}
