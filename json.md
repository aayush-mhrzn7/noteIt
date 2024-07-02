MOCK_DATA.filter((item) => {
return search.toLowerCase() === ""
? item
: item.title.toLowerCase().includes(search);
}).map((d) => (

<div
className={`bg-white transition-transform rounded-xl my-3 w-full shadow-xl block p-4 cursor-pointer ${
              open ? `null`:`hover:scale-[1.06]`            }`}
key={nanoid()}
onClick={() => console.log("click")} >
<p className="font-semibold font-primary  mt-3 mb-6 flex justify-between items-center">
{d.date}{" "}
{favorate ? (
<FaHeart
className="cursor-pointer"
onClick={() => setFavorate(!favorate)}
/>
) : (
<FaRegHeart
className="cursor-pointer"
onClick={() => setFavorate(!favorate)}
/>
)}
</p>
<h1 className="text-xl font-semibold font-primary mt-2">
{d.title}
</h1>
<p className="font-primary my-2">
{d.body.length > 70
? `${d.body.slice(0, 70)} ....`
: ` ${d.body}`}
</p>
</div>
))}
