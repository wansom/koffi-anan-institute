const AboutHero = ({title,subtitle,background}) => {
  return (
    <section className="about" style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
    <div className="banner-mask">
        <div className="banner-container container">
            <div className="banner-text">
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </div>
        </div>
    </div>
</section>
    );
};
export default AboutHero;
