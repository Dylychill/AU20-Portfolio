import React, {useState} from "react";
import "antd/dist/antd.css";
import '../App.css';
import {Modal, Button} from "antd";
import PDF from "react-pdf-js";
// This PDF previewer utilizes the react-pdf-js library, and so is heavily taken from that documentation.
// It is only as its own component in my repo so it can be reused across my site.

const pdfViewer = ({pdf, onCancel, visible})=> {
   const [page, setPage] = useState(1);
   const [pages, setPages] = useState(null);
   const onDocumentError = (err) => {
      console.error('pdf viewer error:', err);
   }
   const onDocumentComplete = (numPages) =>{
      setPages(numPages)
   }
   return(
      <Modal visible={visible}
         onCancel={onCancel}
         maskClosable={false}
         style={{top: 20}}
         width={"50%"}
      >
         <PDF file={pdf}
               page={page}
               onDocumentError={onDocumentError}
               onDocumentComplete={onDocumentComplete}
            />
            <p style={{textAlign: 'center'}}>
               Page {page} of {pages}
         </p>
      </Modal>
   )
};
export default pdfViewer;