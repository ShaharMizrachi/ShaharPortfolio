import React, { ReactNode, cloneElement } from 'react';

// Import all the necessary assets/images
import javaPic from '../../assets/signs/java1.png';
import dotNetPic from '../../assets/signs/Asp .Net Core2.png';
import cssPic from '../../assets/signs/CSS-Logo.png';
import expressJsPic from '../../assets/signs/express-js2.png';
import nodeJsPic from '../../assets/signs/nodejs1.png';
import reactPic from '../../assets/signs/react-logo.jpg';
import reactNativePic from '../../assets/signs/react-native1.png';
import sqlPic from '../../assets/signs/sql2.png';
import angularPic from '../../assets/signs/the-seo-guide-to-angular.png';
import pythonPic from '../../assets/signs/python.png';
import jsPic from '../../assets/signs/js.png';





const AssetProviderPics = ({ children }: { children: ReactNode }) => {
    // Create an object with all image assets
    const images = {
        javaPic,
        dotNetPic,
        cssPic,
        expressJsPic,
        nodeJsPic,
        reactPic,
        reactNativePic,
        sqlPic,
        angularPic,
        pythonPic,
        jsPic,
    };

    // return (
    //     <div>
    //         {React.cloneElement(children , { images })} {/* Pass the images object */}
    //     </div>
    // );
    return <>{cloneElement(children as React.ReactElement, { images })}</>;

};

export default AssetProviderPics;
