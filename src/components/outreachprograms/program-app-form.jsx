const ProgramAppForm=()=>{
    return(
        <section className="prog-application">
        <div className="prog-application-container container">
          <div className="application-form">
            <form action="" className="apply">
              <h2>Apply to this Program</h2>
              <div className="control-group">
                <label for="program">Course</label>
                <br />
                <select id="program" name="program">
                  <option value="program1">Select Program</option>
                  <option value="program2">Masters Program</option>
                  <option value="program3">Program 3</option>
                  <option value="program4">Program 4</option>
                </select>
              </div>
              <div className="control-group">
                <label for="intake">Intake</label>
                <br />
                <select id="intake" name="intake">
                  <option value="intake1">Select Period</option>
                  <option value="intake2">September 2023</option>
                  <option value="intake3">Intake 3</option>
                  <option value="intake4">Intake 4</option>
                </select>
              </div>
              <div className="control-group checkbox">
                <label className="container-check">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label for="">
                  By clicking on “Send Message” you agree to our Terms &
                  Conditions and Privacy Statement.
                </label>
              </div>
              <div className="control-group">
                <button type="submit">Apply Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
export default ProgramAppForm