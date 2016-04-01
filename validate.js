(function () {
    app.validate = {
        getValidator: function (selector, params) {
            return $(selector).kendoValidator(_.merge({
                validateOnBlur: true,
                rules: {
                    validateBirthDateRule: function (input) {
                        if (input.is('input[type=date]')) {
                            var selectedDate = new Date(input.val());
                            var today = new Date();

                            var selectedDateAfterToday = selectedDate > today;
                            return !selectedDateAfterToday;
                        }

                        return true;
                    },
                    validateEmailRule: function (input) {
                        if (input.is('input[name=email]') && !!input.val()) {
                            return input.val().indexOf('@') > 0;
                        }

                        return true;
                    }
                },
                messages: {
                    validateBirthDateRule: 'Please set a birth date in the past.',
                    validateEmailRule: 'The specified email is in invalid format.',
                    required: 'This field is required.'
                }
            }, params)).data('kendoValidator');
        }
    }
}());