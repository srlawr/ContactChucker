({
   requestQuote : function(component, event, helper) {
		helper.retrieveQuote(component,
                             component.get("v.firstN"),
                             component.get("v.secondN"));
    }
})