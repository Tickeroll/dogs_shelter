import React from 'react';
import './bread-crumbs.css'

function BreadCrumbs({page}) {
return (
            <div className="container breadcrumb-padding">
                <a className="breadcrumb-main breadcrumb-config" href="/">Главная</a>
                <span className="breadcrumb-config">{' / '}</span>
                <span className="breadcrumb-second breadcrumb-config">{page}</span>
            </div>
        );
}

export default BreadCrumbs;