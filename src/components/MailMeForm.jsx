function MailMeForm() {
  return (
    <form
      action='https://formsubmit.co/ajax/richialexis@live.com.mx'
      method='POST'
      className='mail-me'
    >
      <fieldset>
        <legend className='mail-me__title'>Enviar un correo</legend>
        <input
          type='hidden'
          name='_next'
          value='https://ricalc.netlify.app/thankyou'
        />
        <p>
          <label htmlFor='email'>Correo</label>
          <input
            required
            type='email'
            name='correo'
            id='email'
            placeholder='correo@ejemplo.com'
          />
        </p>
        <p>
          <label htmlFor='subject-choose'>Asunto</label>
          <input list='subjects' id='subject-choose' name='_subject' required />
          <datalist id='subjects'>
            <option value='Diseño web' />
            <option value='Contaco' />
            <option value='Mensaje personal' />
          </datalist>
        </p>
        <p>
          <label htmlFor='message'>Mensaje</label>
          <textarea
            required
            placeholder='Tu mensaje aquí'
            name='message'
            id='message'
            cols='45'
            rows='6'
          ></textarea>
        </p>
      </fieldset>
      <button className='btn mail-me__submmit'>Enviar</button>
    </form>
  );
}
export default MailMeForm;
