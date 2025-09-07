import './Validate.css'
import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

function Validate() {
  const { t } = useTranslation('validate');
  const [step, setStep] = useState(1);
  const [plateNumber, setPlateNumber] = useState('');
  const [ownerNRIC, setOwnerNRIC] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [yearOfManufacturer, setYearOfManufacturer] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      plateNumber,
      ownerNRIC,
      vehicleMake,
      vehicleModel,
      yearOfManufacturer,
      engineCapacity,
    });
    alert('Form Submitted!');
  };

  return (
    <div className="validate">
      <h1>
        <Trans
          i18nKey="validate_title"
          components={{ 1: <span className="gradient-blue" /> }}
          ns="validate"
        />
      </h1>
      <div className="declaration">
        <FontAwesomeIcon icon={faCircleQuestion} />
        <p>{t('declaration')}</p>
      </div>

      <div className="validation-page">
        <div className={`form-step ${step === 1 ? 'active' : step === 2 ? 'previous' : ''}`}>
          <div className="input-group">
            <p>{t('upload_box_text')}</p>
            <div className="upload-box" onClick={openFileDialog}>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".png,.jpg,.pdf" style={{ display: 'none' }} />
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
          </div>
          {uploadProgress > 0 && (
            <div className="progress-bar">
              <div style={{ width: `${uploadProgress}%` }}></div>
            </div>
          )}
          <div className="input-group">
            <p>{t('plate_no')}</p>
            <input type="text" value={plateNumber} placeholder="e.g. ABC1234" onChange={(e) => setPlateNumber(e.target.value)} />
          </div>
          <div className="input-group">
            <p>{t('owner_nric')}</p>
            <input type="text" value={ownerNRIC} placeholder="XXXXXX-XX-XXXX" onChange={(e) => setOwnerNRIC(e.target.value)} />
          </div>
        </div>

        <div className={`form-step ${step === 2 ? 'active' : step === 1 ? 'previous' : ''}`}>
          <div className="input-group">
            <p>{t('plate_no')}</p>
            <input type="text" value={plateNumber} placeholder="e.g. ABC1234" disabled />
          </div>
          <div className="input-group">
            <p>{t('owner_nric')}</p>
            <input type="text" value={ownerNRIC} placeholder="XXXXXX-XX-XXXX" disabled />
          </div>
          <div className="input-group">
            <p>{t('vehicle_make')}</p>
            <input list="makes" name="make" value={vehicleMake} placeholder={t('vehicle_make')} onChange={(e) => setVehicleMake(e.target.value)} />
            <datalist id="makes">
              <option value="Proton" />
              <option value="Perodua" />
              <option value="Honda" />
              <option value="Toyota" />
            </datalist>
          </div>
          <div className="input-group">
            <p>{t('vehicle_model')}</p>
            <input list="models" name="model" value={vehicleModel} placeholder={t('vehicle_model')} onChange={(e) => setVehicleModel(e.target.value)} />
            <datalist id="models">
              <option value="Saga" />
              <option value="Myvi" />
              <option value="Civic" />
              <option value="Vios" />
            </datalist>
          </div>
          <div className="input-group">
            <p>{t('year_of_manufacturer')}</p>
            <input list="years" name="year" value={yearOfManufacturer} placeholder="2025" onChange={(e) => setYearOfManufacturer(e.target.value)} />
            <datalist id="years">
              <option value="2023" />
              <option value="2022" />
              <option value="2021" />
              <option value="2020" />
            </datalist>
          </div>
          <div className="input-group">
            <p>{t('engine_capacity')}</p>
            <input type="text" value={engineCapacity} placeholder="2000" onChange={(e) => setEngineCapacity(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bottom-btn-container">
        {step === 2 && (
          <FontAwesomeIcon icon={faChevronLeft} onClick={handleBack} style={{ cursor: 'pointer' }} />
        )}
        {step === 1 && (
          <button className="next-btn" onClick={handleNext}>{t('next')}</button>
        )}
        {step === 2 && (
          <button className="next-btn" onClick={handleSubmit}>{t('confirm')}</button>
        )}
      </div>
    </div>
  );
}

export default Validate;
