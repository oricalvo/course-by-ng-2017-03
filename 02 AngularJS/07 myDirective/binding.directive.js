
appModule.directive("binding", function() {
    return {
        link: function(scope, element, attrs) {
            var field = attrs.binding;
            console.log(field);

            //element.text(scope[field]);

            scope.$watch(field, function(newValue) {
                element.text(newValue);
            });
        }
    };
});
