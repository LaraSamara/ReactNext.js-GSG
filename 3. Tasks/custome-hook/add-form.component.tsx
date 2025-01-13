import './add-form.css';
import { IStudent } from '../../types';
import CoursesListForm from '../courses-list-form/courses-list-form.component';
import useFormHook from '../../hooks/form.hook.ts';

interface IProps {
  className?: string;
  onSubmit: (std: IStudent) => void;
}
const AddForm = (props: IProps) => {
  const formHook = useFormHook(props.onSubmit);
  return (
    <div className={`wrapper ${props.className} ${formHook.isOpen ? 'open' : 'closed'}`}>
      <button className='toggle-btn' onClick={() => formHook.setIsOpen(!formHook.isOpen)}>
        {formHook.isOpen ? <span>&and; Close </span> : <span>&or; Open </span>}
        Add Form
      </button>
      <div className="input">
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          value={formHook.student.name}
          onChange={e => formHook.handleChange('name', e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="age">Student Age: </label>
        <input
          id="age"
          type="number"
          min={17}
          max={40}
          value={formHook.student.age}
          onChange={e => formHook.handleChange('age', e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="isGraduated">Is Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          checked={formHook.student.isGraduated}
          onChange={e => formHook.handleChange('isGraduated', e.target.checked)}
        />
      </div>
      <CoursesListForm value={formHook.student.coursesList} onSubmit={formHook.handleCoursesChange} />
      <div className="Actions">
        <button
          onClick={formHook.handleSubmit}
          style={{ color: formHook.errorsList.length ? 'red' : 'initial' }}
        >
          Submit
        </button>
        <button onClick={formHook.handleClear}>Clear</button>
      </div>
      {
        Boolean(formHook.errorsList.length) && (
          <div className='report'>
            <h4>You have the following error/s:</h4>
            {
              formHook.errorsList.map(error => <p key={error}>- {error}</p>)
            }
          </div>
        )
      }
      {Boolean(formHook.message) && <h4>{formHook.message}</h4>}
    </div>
  )
};

export default AddForm;