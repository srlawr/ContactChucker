({
	retrieveQuote : function(component, firstName, secondName) {
		var initAction = component.get("c.getChucked");
        initAction.setParams({ firstN : firstName, secondN: secondName });
        initAction.setCallback(this,function(response){
                if (response.getState() === "SUCCESS"){
                   component.set("v.quote", response.getReturnValue());
                }
            });
        $A.enqueueAction(initAction);
	}
})