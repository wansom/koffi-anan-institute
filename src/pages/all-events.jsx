import AboutHero from "../components/about/hero"
import Navbar from "../components/utils/navbar";
import backgound from "../hero/events-banner.png";

const AllEvents=()=>{
    return (
    <div>
        <Navbar/>
        <main>
        <AboutHero title={'Events'} subtitle={'Let’s Network'} background={backgound}/>
        <section class="filter">
            <div class="filter-container container">
                <div class="filter-top">
                    <div class="head">
                        <h2>Filters</h2>
                    </div>
                    <div class="filter-form">
                        <form action="">
                            <div class="form-group">
                                <input type="text" placeholder="Date"  onfocus="(this.type='date')"/>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Location</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Price</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Category</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Format</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                               <button type="submit">Filter</button>
                            </div>
                        </form>
                    </div>
                    <div class="tab-btns">
                        <button class="tab"><span>All</span></button>
                        <button class="tab active"><span>Upcoming Events</span></button>
                        <button class="tab"><span>Past Events</span></button>
                    </div>
                    <div class="tab-slider">
                        <div class="tab-slide">
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-card">
                                <div class="floating-card">
                                    <span></span>
                                    <div class="hold">
                                        <span class="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0659 6.00239C13.134 6.00239 13.9998 5.10642 13.9998 4.00119C13.9998 2.89597 13.134 2 12.0659 2C10.9978 2 10.132 2.89597 10.132 4.00119C10.132 5.10642 10.9978 6.00239 12.0659 6.00239Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M3.9338 9.99751C5.00187 9.99751 5.86772 9.10154 5.86772 7.99631C5.86772 6.89108 5.00187 5.99512 3.9338 5.99512C2.86572 5.99512 1.99988 6.89108 1.99988 7.99631C1.99988 9.10154 2.86572 9.99751 3.9338 9.99751Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M12.0659 13.9999C13.134 13.9999 13.9998 13.104 13.9998 11.9988C13.9998 10.8935 13.134 9.99756 12.0659 9.99756C10.9978 9.99756 10.132 10.8935 10.132 11.9988C10.132 13.104 10.9978 13.9999 12.0659 13.9999Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.3476 4.91553L5.65198 7.08949" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.3479 11.0847L5.70789 8.94678" stroke="#1C1B1F"
                                                    stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span class="love"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.17 2C9.77533 2 8.56934 2.85302 8.0034 4.07662C7.43746 2.85302 6.2382 2 4.83682 2C2.90319 2 1.33337 3.62913 1.33337 5.63583C1.33337 8.50954 5.36234 12.1943 7.15449 13.6906C7.65305 14.1031 8.35374 14.1031 8.84557 13.6906C10.6445 12.1873 14.6667 8.50255 14.6667 5.63583C14.6734 3.62913 13.1036 2 11.17 2Z"
                                                    fill="#1C1B1F" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <img src="images/home/event-1.png"
                                    alt="Kofi Annan Institute for Conflict Transformation Events"/>
                                <div class="tab-card-info">
                                    <div class="left">
                                        <span>SEP</span> <br/>
                                        <span>23</span>
                                    </div>
                                    <div class="right">
                                        <a href="">Black History Month</a> <br/>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.2597 6.66002C12.2597 9.42669 9.55975 12.7534 8.45975 13.9934C8.21308 14.2667 7.78641 14.2667 7.53975 13.9934C6.43975 12.7534 3.73975 9.42669 3.73975 6.66002C3.73975 4.30669 5.64641 2.40002 7.99975 2.40002C10.3531 2.40002 12.2597 4.30669 12.2597 6.66002Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M7.99329 8.3667C8.93585 8.3667 9.69995 7.6026 9.69995 6.66004C9.69995 5.71747 8.93585 4.95337 7.99329 4.95337C7.05072 4.95337 6.28662 5.71747 6.28662 6.66004C6.28662 7.6026 7.05072 8.3667 7.99329 8.3667Z"
                                                    stroke="#1C1B1F" stroke-width="1.2" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> Monrovia, Liberia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <div class="page">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_477_39" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0"
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
                        <div class="page"><span>1</span></div>
                        <div class="page"><span>2</span></div>
                        <div class="page"><span>3</span></div>
                        <div class="page"><span>4</span></div>
                        <div class="page"><span>5</span></div>
                        <div class="page">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_477_34" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0"
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
                        <div class="page more"><span>More</span></div>
                    </div>
                </div>
            </div>
        </section>
        </main>
        
    </div>
    )
}
export default AllEvents