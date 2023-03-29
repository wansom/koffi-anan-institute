const ProgramAppForm=()=>{
    return(
        <section class="prog-application">
        <div class="prog-application-container container">
          <div class="application-form">
            <form action="" class="apply">
              <h2>Apply to this Program</h2>
              <div class="control-group">
                <label for="program">Course</label>
                <br />
                <select id="program" name="program">
                  <option value="program1">Select Program</option>
                  <option value="program2">Masters Program</option>
                  <option value="program3">Program 3</option>
                  <option value="program4">Program 4</option>
                </select>
              </div>
              <div class="control-group">
                <label for="intake">Intake</label>
                <br />
                <select id="intake" name="intake">
                  <option value="intake1">Select Period</option>
                  <option value="intake2">September 2023</option>
                  <option value="intake3">Intake 3</option>
                  <option value="intake4">Intake 4</option>
                </select>
              </div>
              <div class="control-group checkbox">
                <label class="container-check">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label for="">
                  By clicking on “Send Message” you agree to our Terms &
                  Conditions and Privacy Statement.
                </label>
              </div>
              <div class="control-group">
                <button type="submit">Apply Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
export default ProgramAppForm