
import React from 'react';
import RegisterPutID from '../(RegisterComponents)/registerPutID'
import { FaUpload } from 'react-icons/fa';

interface StepDocumentUploadProps{
    onChangeDocumentFront: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorFront:string;
    onChangeVerse: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorVerse:string;
}

const StepDocumentUpload: React.FC<StepDocumentUploadProps> = ({
    onChangeDocumentFront,
    errorFront,
    onChangeVerse,
    errorVerse
}) => {
  return (
    <div>
        <p className="mt-4 text-gray-700 font-semibold">Documento de Identidade</p>
            <RegisterPutID 
                icon={FaUpload}
                documentName="documentoFrente" 
                onChange={onChangeDocumentFront} 
                error={errorFront}
                text="Frente"
              />

              <RegisterPutID 
                icon={FaUpload}
                documentName="documentoVerso" 
                onChange={onChangeVerse} 
                error={errorVerse}
                text="Verso"
            />
    </div>
  );
};

export default StepDocumentUpload;
