import React from 'react';

const Contacts = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center nav-custom-font ">
            <div class="card  w-96">
                <div class="card-body ">
                    <h2 class="card-title">Become an HSB Dealer</h2>
                    <p>Differentiate your business in the growing segment of home energy independence - sell more, grow more, keep customers happy.</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">DEALERE REGISTRATION</button>
                    </div>
                </div>
            </div>

            <div class="card  w-96 ">
                <div class="card-body ">
                    <h2 class="card-title">Want a Home Standby?</h2>
                    <p>Locate an authorized Champion home standby dealer near you to find out more about sales, service and installation.</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">FIND A DEALER</button>
                    </div>
                </div>
            </div>

            <div class="card  w-96">
                <div class="card-body ">
                    <h2 class="card-title">Connect with Champion</h2>
                    <p>Keep up with all the latest news, product launches and safety updates.</p>
                    <div class="card-actions justify-start">
                        <div class="form-control">
                            <div class="input-group">
                                <input type="text" placeholder="Search…" class="input input-bordered" />
                                <button class="btn btn-primary px-4">
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