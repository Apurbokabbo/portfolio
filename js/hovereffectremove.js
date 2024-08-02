 function handleButtonClick(element) {
            element.classList.add('clicked');
            sessionStorage.setItem('cvButtonClicked', 'true');
        }

        document.addEventListener('DOMContentLoaded', function() {
            if (sessionStorage.getItem('cvButtonClicked') === 'true') {
                document.getElementById('cvButton').classList.add('clicked');
            }
        });

        window.addEventListener('beforeunload', function() {
            sessionStorage.removeItem('cvButtonClicked');
        });