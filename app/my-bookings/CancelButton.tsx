"use clinet";
export default function CancelButton({id}:{id:number}){
        async function cancel(){
            if(!confirm("cancel thisbooking?")) return;
            await fetch(`/api/bookings/${id}`,{method:"DELETE"});
                window.location.reload();
            }
            return(
                <button onClick={cancel} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm mt-2">Cancel Booking</button>
            );
}
    
