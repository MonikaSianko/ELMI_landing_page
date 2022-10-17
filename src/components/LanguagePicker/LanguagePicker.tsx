import React, { useState } from "react";
import styled from "styled-components";

interface ILanguagePickerProps {}

const StyledLanguagePicker = styled.div``;

const languageName = {
  en: "English",
  pl: "Polski",
};

const LanguagePicker: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledLanguagePicker className="lng-picker">
      {/* <div className="icons-box">
        <GoGlobe onClick={hanldeOpen} className="globe" role="button" />
      </div>
      {isOpen ? (
        <ul className="dropdown">
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map((language) => (
                <button key={language} onClick={() => changeLocale(language)}>
                  {languageName[language]}
                </button>
              ))
            }
          </IntlContextConsumer>
        </ul>
      ) : null} */}
    </StyledLanguagePicker>
  );
};

export default LanguagePicker;
