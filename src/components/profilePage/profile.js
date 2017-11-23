import React from "react";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <main className="center container">
                <div>
                    <img src="https://www.maintenanceconnection.com/website/wp-content/uploads/2014/10/slideshow-placeholder-300x300.jpg" alt="" className="circle responsive-img " />
                </div>
                <div>
                    <h2 className="row col s4 offset-s4 ">
                        Lorem ipsum
                    </h2>
                    <p className="row col s4 offset-s4">
                        Lorem ipsum dolor sit amet, case omnes verterem an nam, sea ei summo semper moderatius. Mundi causae ne sed, vero altera omittam nam ei, solet pertinax forensibus in has. Cum at velit nonumy, qui te quodsi consequat, sea eu propriae lobortis. Vis probo utroque accusata an. At lorem meliore eum.

                    Pri timeam sensibus constituam cu, cu sit dicit viris virtute. Propriae expetendis reformidans no ius, sea quod delenit eu. An assentior assueverit eum, pertinax philosophia cum ad, no qui utroque veritus. An has malis essent omittam.

                    </p>
                    <div className="chip col s3">
                        number of posts
                        <i className=" material-icons"></i>
                    </div>
                    <div className="chip col s3">
                        Comments
                        <i className=" material-icons"></i>
                    </div>
                </div>
            </main>
        );
    }

}