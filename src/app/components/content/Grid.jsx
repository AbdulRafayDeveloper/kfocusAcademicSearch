import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const GridView = ({
  selectedValue,
  toggleUp,
  moveUp,
  isSidebarVisible,
  selectAll,
}) => {
  const products = [
    {
      title:
        "The dala crose coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel vulputate orci, id malesuada neque. Nulla vel quam sit amet dui convallis ultricies. Maecenas tempus tellus a est condimentum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel luctus purus. Proin neque nunc, fringilla sit amet dapibus in, sollicitudin sed dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci mi, varius tincidunt nunc vel, vulputate dictum est. Vivamus auctor quam facilisis lobortis lacinia. Maecenas eget ex dictum leo cursus varius quis eu est. Donec cursus venenatis tortor vitae lobortis.Suspendisse augue eros, efficitur et venenatis vitae, accumsan vitae turpis. Aenean ut dapibus ante, at maximus lacus. Aliquam imperdiet vehicula felis sed luctus. Nunc vitae egestas sem. Proin a pulvinar quam. Nam lobortis ornare ornare. Nulla vitae ultricies ligula. Aliquam hendrerit velit eget eros sollicitudin tempor. In hac habitasse platea dictumst.Praesent quis neque ultricies, feugiat nisl vitae, cursus diam. Sed et lectus nec mauris malesuada mattis. Nullam at mauris a sapien aliquam pharetra. Vivamus dictum, ligula vitae placerat porttitor, metus erat tincidunt quam, at congue elit mauris a velit. Maecenas venenatis mi sed rhoncus dictum. Praesent rutrum mauris sit amet mauris molestie ullamcorper. Vivamus malesuada consequat consectetur.Fusce turpis sapien, condimentum vel tellus in, vulputate rutrum ligula. Quisque id velit vitae tellus hendrerit porttitor ut eu felis. Maecenas facilisis efficitur rhoncus. Mauris rhoncus nec velit quis condimentum. Duis ultrices dui sit amet leo tincidunt dictum. Donec enim nibh, vulputate rutrum felis suscipit, vehicula vestibulum libero. Nulla nec enim volutpat, mollis ipsum eget, eleifend nibh. Praesent non quam in ex dignissim feugiat eu auctor enim. Nam varius vestibulum massa eget efficitur. Nam ex nibh, tempor vel lectus vitae, dignissim malesuada mi. Sed eu dapibus velit. Pellentesque vulputate mattis aliquet.Aliquam pellentesque ipsum eu dapibus molestie. Quisque dolor enim, placerat vel magna gravida, venenatis dignissim augue. Proin bibendum felis justo, a ullamcorper massa aliquam vitae. Vivamus nec luctus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi elementum sapien felis, eu interdum nisl tincidunt ut. Aliquam quis sagittis metus, sit amet interdum lacus. Sed id fermentum dui, at fringilla quam. Donec id lorem et turpis efficitur hendrerit. Donec eros odio, iaculis eget gravida sed, faucibus varius nulla. Vivamus malesuada elit libero, aliquam venenatis nunc fermentum in. Aenean volutpat nec felis nec pharetra. Maecenas ac ante at mi vulputate commodo.Nullam congue arcu non condimentum malesuada. Quisque molestie posuere blandit. Aenean velit arcu, fermentum ac blandit sit amet, fermentum ut augue. Sed hendrerit orci sit amet libero scelerisque ornare. Nulla interdum lacus neque, quis facilisis est tristique ut. Mauris sodales metus elit, quis efficitur neque ornare at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nibh nisi, condimentum eu suscipit ut, rutrum sed orci. Mauris pretium justo ut aliquet accumsan. Etiam ut quam et ligula maximus viverra sit amet at tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu ultricies erat. Proin a massa ac risus sagittis volutpat. Cras elementum tincidunt risus, sed placerat eros finibus vel. Mauris tempor lorem eu nulla vulputate feugiat. Donec accumsan risus lorem, sed lobortis dui laoreet vitae.Donec nunc odio, blandit non tempus eget, sodales in tellus. Aenean tincidunt rhoncus diam at placerat. Aenean tincidunt commodo dui, vitae pharetra ante egestas id. Sed venenatis venenatis nunc, vel interdum augue auctor sit amet. Cras quis lectus quis ante ornare pretium. Morbi pharetra massa nec diam porttitor consectetur. Aenean tincidunt orci odio. Curabitur interdum sit amet nisl sed euismod. Etiam vestibulum magna et ipsum auctor suscipit. Donec non porta risus, in tincidunt sapien. Quisque faucibus condimentum odio vel tempor. Nam luctus mi odio, ut facilisis erat ultrices ut. Cras ac tempus urna. Morbi risus tortor, facilisis at laoreet nec, imperdiet in mi.Cras elit augue, elementum a molestie eget, hendrerit porta dui. Sed sollicitudin pharetra aliquet. Cras laoreet nisl eget tempor gravida. Phasellus risus velit, scelerisque quis tempus sed, porttitor id lectus. Proin feugiat vestibulum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tincidunt sagittis porttitor. Integer ut ultricies nunc. Etiam egestas, libero id ultrices sodales, ipsum sapien euismod lacus, non tristique quam risus vitae ante. Donec lobortis diam sed eros rhoncus, at lobortis urna consectetur. Nam ac tincidunt mi. Morbi consequat, justo sit amet sagittis blandit, enim lacus pulvinar turpis, sed pharetra arcu lorem ac neque. Mauris sollicitudin libero non risus convallis sodales. Nam eget erat a urna mattis pellentesque. Suspendisse placerat viverra odio, ac semper risus convallis vel. Nullam vulputate, ipsum eu congue dapibus, ligula ligula sollicitudin sem, eget interdum diam ex non magna.Duis euismod, metus id convallis tempor, tortor libero dapibus nunc, ac sollicitudin quam odio vitae turpis. Nam sem massa, ornare at mauris ac, porta feugiat nulla. Sed at lorem leo. Morbi id massa at tellus blandit gravida. Proin aliquet, erat ut condimentum auctor, odio nibh hendrerit nisl, ac suscipit eros ligula et magna. Mauris vel lorem quam. Mauris in tortor vel purus facilisis tempor. Vivamus felis massa, dictum id ipsum blandit, dictum posuere risus. Etiam sit amet ipsum id erat finibus finibus. Morbi luctus mollis odio, id mollis ex rhoncus id. Curabitur sit amet rhoncus ex, ac laoreet nulla. Integer varius est sapien, vel faucibus sem elementum at. Etiam sed sem sed neque pharetra accumsan.Proin diam nisl, facilisis ut posuere nec, dignissim id magna. Aenean ut nisi tellus. Maecenas elit ex, dictum quis sapien rhoncus, maximus efficitur turpis. Phasellus luctus, ex eget mattis finibus, risus erat tempus neque, ac condimentum risus libero id metus. Etiam ullamcorper odio non arcu blandit tincidunt. Aliquam quis rhoncus tortor. Vestibulum ultricies, justo pretium tempus consectetur, elit nibh pharetra enim, eu ultricies velit metus et libero. Sed non leo accumsan, efficitur risus id, ullamcorper magna. Praesent at sollicitudin enim. Vestibulum mauris purus, tempor quis pharetra vel, varius at odio. Maecenas accumsan velit ut consequat aliquam.",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
  ];
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  console.log(selectedValue);

  const recordsToDisplay = products.slice(0, selectedValue);
  console.log("toggle:  ", moveUp);

  const gridRef = useRef();

  useEffect(() => {
    if (toggleUp && gridRef.current) {
      if (gridRef.current.scrollTop !== 0) {
        gridRef.current.scrollTo({ top: 0, behavior: "smooth" });
        toggleUp(false);
      }
    }
  }, [moveUp]);

  return (
    <div
      className={`relative listheight h-screen overflow-y-auto ${
        isSidebarVisible ? "max-w-[1210px]" : "w-full"
      } mobile:h-[76vh] md-mobile:h-[76vh] sm-mobile:h-[76vh]`}
      ref={gridRef}
    >
      <div className="w-full">
        {recordsToDisplay.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 border rounded-lg shadow-lg mb-4 flex flex-wrap w-full hover:bg-gray-100"
          >
            {/* Checkbox */}
            <div className="flex flex-shrink-0 w-[5%] items-start pt-1">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="checkbox-input"
                checked={selectAll} // Bind the checkbox to the "select all" state
                onChange={() => {}} // Keep empty since `checked` is controlled
              />
            </div>

            {/* Main Content */}
            <div className="flex-1 w-[60%] items-start">
              <div className="font-normal text-base pb-2 mt-0">
                {product.title}
              </div>
              <div className="text-gray-700 text-xs pb-2 underline">
                {product.authors}
              </div>

              <div className="flex flex-col-3 gap-4 text-gray-600 text-xs pb-1">
                <div className="border border-r-gray-600 pr-1">
                  {product.date}
                </div>
                <div className="underline border border-r-gray-600 pr-1">
                  SCIENTIFIC REPORTS
                </div>

                <div>
                  <p>Indexed In {product.indexIn}</p>
                </div>
              </div>

              <div className="text-gray-600 text-xs">{product.data}</div>

              <div className="flex flex-col-3 gap-4 text-gray-600 text-xs pb-1 pt-8">
                <div className="underline">Free Full Text from Publisher</div>
                <div className="underline">View Full Text</div>
                <div className="items-center">
                  <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                </div>
              </div>
            </div>

            {/* Citations and References */}
            <div className="laptop:w-[20%] flex flex-col items-end mobile:hidden laptop:flex">
              <div className="text-gray-600 text-xs pr-12 border-b border-gray-400">
                <div className="text-lg">{product.citedBy}</div>
                <div className="text-xs pb-2">Citations</div>
              </div>
              <div className="text-gray-600 text-xs pr-[36px] pb-16">
                <div className="text-lg">{product.ref}</div>
                <div className="text-xs">References</div>
              </div>
              <div className="text-gray-600 text-xs flex flex-row items-center space-x-2 border-t border-gray-400 pt-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-blue-600">
                  <a
                    href={`../../pdfPage/${index}`} // Navigate to the web route
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline focus:outline-none"
                  >
                    {"Ask this paper"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
