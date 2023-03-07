const ThinkTanks = () => {
  return (
    <section className="think-tanks">
    <div className="think-tanks-container container">
        <div className="think-head">
            <h1>Think Tanks</h1>
        </div>
        <div className="think-tank-content">
            <div className="think-tank-card">
                <img src="images/home/think-tanks.svg"
                    alt="Kofi Annan Institute for Conflict Transformation Think Tanks"></img>
                <div className="think-tank-info">
                    <h2>Mary Antoinette Brown Sherman Think Tank</h2>
                    <p>We also launched the Mary Antoinette Brown Sherman Think Tank, which will strengthen the
                        position of girls and women in society through leadership and governance training
                        programs, by providing a platform for discussion and through research.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="think-tank-card">
                <div className="think-tank-info">
                    <h2>Mary Antoinette Brown Sherman Think Tank</h2>
                    <p>We also launched the Mary Antoinette Brown Sherman Think Tank, which will strengthen the
                        position of girls and women in society through leadership and governance training
                        programs, by providing a platform for discussion and through research.</p>
                    <button>Learn More</button>
                </div>
                <img src="images/home/think-tanks.svg"
                    alt="Kofi Annan Institute for Conflict Transformation Think Tanks"></img>
            </div>
        </div>
    </div>
</section>
  );
};

export default ThinkTanks;
