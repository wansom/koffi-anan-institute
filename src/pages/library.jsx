import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from "../hero/library.jpg"

const Library = () => {
    return (
        <>
            <Navbar />
            <AboutHero title={'Library'} subtitle='Learning Resources' background={background} />
            <main>
                <section className="lib-search">
                    <div className="library-container container mx-auto px-5 md:px-10">
                        {/* <form action="" className="search">
                    <div className="search-input">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="search-input-data"/>
                        </div>
                        <div className="form-control">
                            <div className="radio">
                                <input type="radio" name="theses" id=""/>
                                <label for="theses">Theses</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="theses" id=""/>
                                <label for="theses">Policy Documents</label>
                            </div>
                        </div>
                    </div>
                    <div className="search-submit">
                        <button>Search</button>
                    </div>
                </form> */}
                        <p>The library of the Kofi Annan Institute for Conflict Transformation was established in 2008 by KAICT staff. Initial external support came from the Natural Resource Governance section of GIZ, the German Development Corporation. The library has expanded since and found a new home on the ground floor of the Graduate School building on the Capitol Hill Campus, University of Liberia, in 2018, through the support of the German Civil Peace Service, which has become the biggest donor to the library. Support has also been received from Books For Africa, and various private donors. </p>
                    </div>
                </section>
                <section className="container mx-auto px-5 md:px-10 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
                        <div className="content-card">
                            <img src="images/library.jpg" alt="" />
                            <div className="content-info">
                                <div className="year px-3">
                                    BOOKS
                                </div>

                                <div className="bottom">
                                    <p>The library is well-equipped with almost 2,000 books spanning a wide range of topics related to the institute’s work. These include peace and peacebuilding, conflict, security, development, gender, human rights, leadership, governance, International Relations, research methodology, and Liberian history, natural resources, and fiction, amongst others. </p>

                                </div>
                            </div>
                        </div>
                        <div className="content-card">
                            <img src="images/library-2.jpg" alt="" />
                            <div className="content-info">
                                <div className="year px-3">
                                    NEWSPAPERS
                                </div>

                                <div className="bottom">
                                    <p>KAICT has a newspaper collection from various sources from the 1990s.
                                        We have printed copies of newspapers from various outlets, including Front Page Africa, Daily Observer, New Dawn, Inquirer, Hot Pepper, the Independent, Democrat, and Heritage, going back to 2010.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="content-card">
                            <img src="images/policy-papers.jpg" alt="" />
                            <div className="content-info">
                                <a href="/policyPapers">
                                <div className="year px-3 flex items-center justify-center">
                                    POLICY PAPERS  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_69_173" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0"
                            y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_69_173)">
                            <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                                fill="#FCFCFC" />
                        </g>
                    </svg>
                                </div>
                                </a>
                               

                                <div className="bottom">
                                    <p>Here you find Policy Papers on peace, conflict, security, gender, and development in Liberia.</p>
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="return-data">
                    <div className="return-data-container container">
                        <div className="left">
                            <div className="return-data-card">
                                <h2>All Categories</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Arts, Architecture & Applied Arts</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Business & Economics</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Earth & Environmental Sciences</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Engineering & Applied Sciences</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            General</a>
                                        <span>(156)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="return-data-card">
                                <h2>Document Type</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="flex"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Thesis</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Policy Document</a>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <a href="#" className="flex"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_598_334" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_598_334)">
                                                <path
                                                    d="M5.48464 10.5L4.66797 9.68333L7.3513 7L4.66797 4.31667L5.48464 3.5L8.98464 7L5.48464 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                            Journal</a>
                                        <span>(156)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="return-data-card">
                                <h2>Year Published</h2>
                                <ul>
                                    <li>
                                        <div className="input-year">
                                            <input type="checkbox" />
                                            <span>2018</span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year">
                                            <input type="checkbox" />
                                            <span>2017</span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year">
                                            <input type="checkbox" />
                                            <span>2016</span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year">
                                            <input type="checkbox" />
                                            <span>2015</span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="return-data-card">
                                <h2>Ratings</h2>
                                <ul>
                                    <li>
                                        <div className="input-year flex">
                                            <input type="checkbox" />
                                            <span className="flex gap-1">
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year flex">
                                            <input type="checkbox" />
                                            <span className="flex gap-1">
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year flex">
                                            <input type="checkbox" />
                                            <span className="flex gap-1">
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year flex">
                                            <input type="checkbox" />
                                            <span className="flex gap-1">
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                    <li>
                                        <div className="input-year flex">
                                            <input type="checkbox" />
                                            <span>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z" fill="#DE4404" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span>(156)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content-card">
                                <img src="images/services/card-data.png" alt="" />
                                <div className="content-info">
                                    <div className="year">
                                        2016
                                    </div>
                                    <div className="top">
                                        <span>by</span>
                                        <span>Bendon Murgor</span>
                                        <span>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                        <span className="no-margin">Theses</span>
                                        <span className="no-margin">,</span>
                                        <span>Journal</span>
                                    </div>
                                    <div className="bottom">
                                        <h2>Administrative science quarterly.</h2>
                                        <div className="more-info">
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_600_20" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="15" height="15">
                                                        <rect width="15" height="15" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_600_20)">
                                                        <path
                                                            d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                            fill="#1C1B1F" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2,019 views</span>
                                            <span>
                                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                                </svg>
                                            </span>
                                            <span>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                            </span>
                                            <span>(1,452)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-card">
                                <img src="images/services/card-data.png" alt="" />
                                <div className="content-info">
                                    <div className="year">
                                        2016
                                    </div>
                                    <div className="top">
                                        <span>by</span>
                                        <span>Bendon Murgor</span>
                                        <span>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                        <span className="no-margin">Theses</span>
                                        <span className="no-margin">,</span>
                                        <span>Journal</span>
                                    </div>
                                    <div className="bottom">
                                        <h2>Administrative science quarterly.</h2>
                                        <div className="more-info">
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_600_20" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="15" height="15">
                                                        <rect width="15" height="15" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_600_20)">
                                                        <path
                                                            d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                            fill="#1C1B1F" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2,019 views</span>
                                            <span>
                                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                                </svg>
                                            </span>
                                            <span>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                            </span>
                                            <span>(1,452)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-card">
                                <img src="images/services/card-data.png" alt="" />
                                <div className="content-info">
                                    <div className="year">
                                        2016
                                    </div>
                                    <div className="top">
                                        <span>by</span>
                                        <span>Bendon Murgor</span>
                                        <span>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                        <span className="no-margin">Theses</span>
                                        <span className="no-margin">,</span>
                                        <span>Journal</span>
                                    </div>
                                    <div className="bottom">
                                        <h2>Administrative science quarterly.</h2>
                                        <div className="more-info">
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_600_20" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="15" height="15">
                                                        <rect width="15" height="15" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_600_20)">
                                                        <path
                                                            d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                            fill="#1C1B1F" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2,019 views</span>
                                            <span>
                                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                                </svg>
                                            </span>
                                            <span>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                            </span>
                                            <span>(1,452)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-card">
                                <img src="images/services/card-data.png" alt="" />
                                <div className="content-info">
                                    <div className="year">
                                        2016
                                    </div>
                                    <div className="top">
                                        <span>by</span>
                                        <span>Bendon Murgor</span>
                                        <span>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                        <span className="no-margin">Theses</span>
                                        <span className="no-margin">,</span>
                                        <span>Journal</span>
                                    </div>
                                    <div className="bottom">
                                        <h2>Administrative science quarterly.</h2>
                                        <div className="more-info">
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_600_20" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="15" height="15">
                                                        <rect width="15" height="15" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_600_20)">
                                                        <path
                                                            d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                            fill="#1C1B1F" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2,019 views</span>
                                            <span>
                                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                                </svg>
                                            </span>
                                            <span>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                                        fill="#DE4404" />
                                                </svg>
                                            </span>
                                            <span>(1,452)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="lib-pagination">
                    <div className="lib-pagination-container container">
                        <div className="pagination-boxes">
                            <div className="pagination">
                                <div className="page">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_39" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="20" height="20">
                                            <rect width="20" height="20" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_39)">
                                            <path
                                                d="M13.3333 18.3333L5 9.99996L13.3333 1.66663L14.8125 3.14579L7.95833 9.99996L14.8125 16.8541L13.3333 18.3333Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="page"><span>1</span></div>
                                <div className="page"><span>2</span></div>
                                <div className="page"><span>3</span></div>
                                <div className="page"><span>4</span></div>
                                <div className="page"><span>5</span></div>
                                <div className="page">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_34" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="20" height="20">
                                            <rect width="20" height="20" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_34)">
                                            <path
                                                d="M6.68717 18.3333L5.20801 16.8541L12.0622 9.99996L5.20801 3.14579L6.68717 1.66663L15.0205 9.99996L6.68717 18.3333Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="page more"><span>More</span></div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer />

        </>
    )

}

export default Library