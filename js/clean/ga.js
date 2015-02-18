function InitGA(){

    document.addEventListener("deviceready", function(){

        window.analytics.startTrackerWithId('UA-2170097-21');

    });

}

function GA_track(page){
    window.analytics.trackView("page: " + page);
}

function GA_event(Category,Action,Label,Value){
    window.analytics.trackEvent(Category, Action, Label, Value);  //Label and Value are optional, Value is numeric
}

function GA_set_id(id){
    window.analytics.setUserId(id);
}



InitGA();