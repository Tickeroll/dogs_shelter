import React from 'react';

function BreadCrumbs({page}) {

return (
            <div className="container breadcrumb-padding">
                <a href="/">Главная</a>
                <span>{' / '}</span>
                <span className="bread-crumbs-active">{page}</span>
            </div>
        );
}

export default BreadCrumbs;