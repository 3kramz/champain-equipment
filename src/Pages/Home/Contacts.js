import React from 'react';

const Contacts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center nav-custom-font ">
            <div className="card  w-96">
                <div className="card-body ">
                    <h2 className="card-title">Become an HSB Dealer</h2>
                    <p>Differentiate your business in the growing segment of home energy independence - sell more, grow more, keep customers happy.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">DEALERE REGISTRATION</button>
                    </div>
                </div>
            </div>

            <div className="card  w-96 ">
                <div className="card-body ">
                    <h2 className="card-title">Want a Home Standby?</h2>
                    <p>Locate an authorized Champion home standby dealer near you to find out more about sales, service and installation.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">FIND A DEALER</button>
                    </div>
                </div>
            </div>

            <div className="card  w-96">
                <div className="card-body ">
                    <h2 className="card-title">Connect with Champion</h2>
                    <p>Keep up with all the latest news, product launches and safety updates.</p>
                    <div className="card-actions justify-start">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-primary px-4">
                                   SIGNUP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;