const AboutHero = ({title,subtitle,background}) => {
  return (
    <section class="about" style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
    <div class="banner-mask">
        <div class="banner-container container">
            <div class="banner-text">
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </div>
        </div>
    </div>
</section>
    );
};
export default AboutHero;
