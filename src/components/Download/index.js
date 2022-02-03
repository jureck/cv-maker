import React from 'react';
import './index.scss';

import Button from '../Button/index';
import CvDocument from '../CvDocument/index';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Download = ({ template, personal, schools, works, languages, skills, changeStep }) => {
  
    return (
      <main className="download__container">
        <p className="download__title">Your CV is ready</p>

        <Button>
          <PDFDownloadLink
            document={
              <CvDocument
                template={template}
                personal={personal}
                schools={schools}
                works={works}
                languages={languages}
                skills={skills}
              />
            }
            fileName={`${personal.name}'s_CV.pdf`}
          >
            {({ loading }) =>
              loading ? "Loading..." : "Download"
            }
          </PDFDownloadLink>
        </Button>
        <section className="form__controls">
          <span onClick={() => changeStep(7)}>
            <Button text="Back" type="cancel" />
          </span>
        </section>
      </main>
    );
}
 
export default Download;