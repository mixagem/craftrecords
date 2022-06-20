
// hahahah fodddass, quando um gajo não sabia inventava mesmo. loops de 1 volta, pqp x'D
function locales() {

    fetch('locales.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    // que macho
    function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("home-link");
            div.innerHTML = data[i].menuHome;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-link");
            div.innerHTML = data[i].menuStudio;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-link");
            div.innerHTML = data[i].menuPortfolio;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-link");
            div.innerHTML = data[i].menuContact;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-name");
            div.innerHTML = data[i].companyName;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-slogan");
            div.innerHTML = data[i].companySlogan;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-text");
            div.innerHTML = data[i].companyText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("know-more");
            div.innerHTML = data[i].knowMore;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("lets-talk");
            div.innerHTML = data[i].letsTalk;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-1");
            div.innerHTML = data[i].studiomenuRecording;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-2");
            div.innerHTML = data[i].studiomenuMixmaster;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-3");
            div.innerHTML = data[i].studiomenuProdutction;
        }
        // for (var i = 0; i < data.length; i++) {
        //     var div = document.getElementById("studio-menu-4");
        //     div.innerHTML = data[i].studiomenuRehearsal;
        // }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-titulo");
            div.innerHTML = data[i].studioTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-text");
            div.innerHTML = data[i].studioText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-schedule");
            div.innerHTML = data[i].scheduleNow;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-text-2");
            div.innerHTML = data[i].studioText2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-titulo");
            div.innerHTML = data[i].mixmasterTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-titulo-2");
            div.innerHTML = data[i].mixmasterTitulo2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-text");
            div.innerHTML = data[i].mixmasterText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("send-your-stems");
            div.innerHTML = data[i].sendYourStems;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-titulo");
            div.innerHTML = data[i].productionTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-text");
            div.innerHTML = data[i].productionText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-lets-talk");
            div.innerHTML = data[i].letsTalk;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-titulo");
            div.innerHTML = data[i].rehearsalTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-text");
            div.innerHTML = data[i].rehearsalText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-schedule");
            div.innerHTML = data[i].scheduleNow;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("copyright-company");
            div.innerHTML = data[i].copyrightCompany;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("footer-more");
            div.innerHTML = data[i].getInTouch;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-titulo");
            div.innerHTML = data[i].contactTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-address");
            div.innerHTML = data[i].contactAddress;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-address-2");
            div.innerHTML = data[i].contactAddress2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-hours");
            div.innerHTML = data[i].officeHours;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-hours-2");
            div.innerHTML = data[i].officeHours2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-mail");
            div.innerHTML = data[i].officeMail;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-mail-2");
            div.innerHTML = data[i].officeMail2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-shop");
            div.innerHTML = data[i].contactShop;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-insta");
            div.innerHTML = data[i].contactInsta;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-youtube");
            div.innerHTML = data[i].contactYoutube;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-booking");
            div.innerHTML = data[i].contactBooking;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-1");
            div.innerHTML = data[i].contactSolo1;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-2");
            div.innerHTML = data[i].contactSolo2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-3");
            div.innerHTML = data[i].contactSolo3;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-4");
            div.innerHTML = data[i].contactSolo4;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-5");
            div.innerHTML = data[i].contactSolo5;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-titulo");
            div.innerHTML = data[i].portfolioTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-text");
            div.innerHTML = data[i].portfolioText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-schedule");
            div.innerHTML = data[i].portfolioSchedule;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-button");
            div.innerHTML = data[i].portfolioButton;
        }

    }
}




function localesUK() {

    fetch('localesUK.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("home-link");
            div.innerHTML = data[i].menuHome;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-link");
            div.innerHTML = data[i].menuStudio;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-link");
            div.innerHTML = data[i].menuPortfolio;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-link");
            div.innerHTML = data[i].menuContact;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-name");
            div.innerHTML = data[i].companyName;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-slogan");
            div.innerHTML = data[i].companySlogan;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("company-text");
            div.innerHTML = data[i].companyText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("know-more");
            div.innerHTML = data[i].knowMore;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("lets-talk");
            div.innerHTML = data[i].letsTalk;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-1");
            div.innerHTML = data[i].studiomenuRecording;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-2");
            div.innerHTML = data[i].studiomenuMixmaster;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-menu-3");
            div.innerHTML = data[i].studiomenuProdutction;
        }
        // for (var i = 0; i < data.length; i++) {
        //     var div = document.getElementById("studio-menu-4");
        //     div.innerHTML = data[i].studiomenuRehearsal;
        // }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-titulo");
            div.innerHTML = data[i].studioTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-text");
            div.innerHTML = data[i].studioText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-schedule");
            div.innerHTML = data[i].scheduleNow;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("studio-text-2");
            div.innerHTML = data[i].studioText2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-titulo");
            div.innerHTML = data[i].mixmasterTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-titulo-2");
            div.innerHTML = data[i].mixmasterTitulo2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("mixmaster-text");
            div.innerHTML = data[i].mixmasterText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("send-your-stems");
            div.innerHTML = data[i].sendYourStems;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-titulo");
            div.innerHTML = data[i].productionTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-text");
            div.innerHTML = data[i].productionText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("production-lets-talk");
            div.innerHTML = data[i].letsTalk;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-titulo");
            div.innerHTML = data[i].rehearsalTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-text");
            div.innerHTML = data[i].rehearsalText;
        }
        // for (var i = 0; i < data.length; i++) {
        //     var div = document.getElementById("gearlist");
        //     div.innerHTML = data[i].gearlist;
        // }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("rehearsal-schedule");
            div.innerHTML = data[i].scheduleNow;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("copyright-company");
            div.innerHTML = data[i].copyrightCompany;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("footer-more");
            div.innerHTML = data[i].getInTouch;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-titulo");
            div.innerHTML = data[i].contactTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-address");
            div.innerHTML = data[i].contactAddress;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-address-2");
            div.innerHTML = data[i].contactAddress2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-hours");
            div.innerHTML = data[i].officeHours;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-hours-2");
            div.innerHTML = data[i].officeHours2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-mail");
            div.innerHTML = data[i].officeMail;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("office-mail-2");
            div.innerHTML = data[i].officeMail2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-shop");
            div.innerHTML = data[i].contactShop;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-insta");
            div.innerHTML = data[i].contactInsta;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-youtube");
            div.innerHTML = data[i].contactYoutube;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contact-booking");
            div.innerHTML = data[i].contactBooking;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-1");
            div.innerHTML = data[i].contactSolo1;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-2");
            div.innerHTML = data[i].contactSolo2;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-3");
            div.innerHTML = data[i].contactSolo3;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-4");
            div.innerHTML = data[i].contactSolo4;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("contacto-5");
            div.innerHTML = data[i].contactSolo5;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-titulo");
            div.innerHTML = data[i].portfolioTitulo;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-text");
            div.innerHTML = data[i].portfolioText;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-schedule");
            div.innerHTML = data[i].portfolioSchedule;
        }
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("portfolio-button");
            div.innerHTML = data[i].portfolioButton;
        }
    }
}

window.onload = localesUK;