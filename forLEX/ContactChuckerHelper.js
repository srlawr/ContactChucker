({
	retrieveQuote : function(component) {
		var initAction = component.get("c.getChucked");
        initAction.setParams({ recordId : component.get("v.recordId") });
        initAction.setCallback(this,function(response){
                if (response.getState() === "SUCCESS"){
                   component.set("v.quote", response.getReturnValue());
                }
            });
        $A.enqueueAction(initAction);
	}
})