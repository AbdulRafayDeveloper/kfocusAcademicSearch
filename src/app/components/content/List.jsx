import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ListView = ({
  toggleAskPaper,
  selectedValue,
  togglePdf,
  toggleUp,
  moveUp,
  selectAll,
  pagerIndex,
}) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const products = [
    {
      title:
        "1 The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel vulputate orci, id malesuada neque. Nulla vel quam sit amet dui convallis ultricies. Maecenas tempus tellus a est condimentum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel luctus purus. Proin neque nunc, fringilla sit amet dapibus in, sollicitudin sed dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci mi, varius tincidunt nunc vel, vulputate dictum est. Vivamus auctor quam facilisis lobortis lacinia. Maecenas eget ex dictum leo cursus varius quis eu est. Donec cursus venenatis tortor vitae lobortis.Suspendisse augue eros, efficitur et venenatis vitae, accumsan vitae turpis. Aenean ut dapibus ante, at maximus lacus. Aliquam imperdiet vehicula felis sed luctus. Nunc vitae egestas sem. Proin a pulvinar quam. Nam lobortis ornare ornare. Nulla vitae ultricies ligula. Aliquam hendrerit velit eget eros sollicitudin tempor. In hac habitasse platea dictumst.Praesent quis neque ultricies, feugiat nisl vitae, cursus diam. Sed et lectus nec mauris malesuada mattis. Nullam at mauris a sapien aliquam pharetra. Vivamus dictum, ligula vitae placerat porttitor, metus erat tincidunt quam, at congue elit mauris a velit. Maecenas venenatis mi sed rhoncus dictum. Praesent rutrum mauris sit amet mauris molestie ullamcorper. Vivamus malesuada consequat consectetur.Fusce turpis sapien, condimentum vel tellus in, vulputate rutrum ligula. Quisque id velit vitae tellus hendrerit porttitor ut eu felis. Maecenas facilisis efficitur rhoncus. Mauris rhoncus nec velit quis condimentum. Duis ultrices dui sit amet leo tincidunt dictum. Donec enim nibh, vulputate rutrum felis suscipit, vehicula vestibulum libero. Nulla nec enim volutpat, mollis ipsum eget, eleifend nibh. Praesent non quam in ex dignissim feugiat eu auctor enim. Nam varius vestibulum massa eget efficitur. Nam ex nibh, tempor vel lectus vitae, dignissim malesuada mi. Sed eu dapibus velit. Pellentesque vulputate mattis aliquet.Aliquam pellentesque ipsum eu dapibus molestie. Quisque dolor enim, placerat vel magna gravida, venenatis dignissim augue. Proin bibendum felis justo, a ullamcorper massa aliquam vitae. Vivamus nec luctus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi elementum sapien felis, eu interdum nisl tincidunt ut. Aliquam quis sagittis metus, sit amet interdum lacus. Sed id fermentum dui, at fringilla quam. Donec id lorem et turpis efficitur hendrerit. Donec eros odio, iaculis eget gravida sed, faucibus varius nulla. Vivamus malesuada elit libero, aliquam venenatis nunc fermentum in. Aenean volutpat nec felis nec pharetra. Maecenas ac ante at mi vulputate commodo.Nullam congue arcu non condimentum malesuada. Quisque molestie posuere blandit. Aenean velit arcu, fermentum ac blandit sit amet, fermentum ut augue. Sed hendrerit orci sit amet libero scelerisque ornare. Nulla interdum lacus neque, quis facilisis est tristique ut. Mauris sodales metus elit, quis efficitur neque ornare at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nibh nisi, condimentum eu suscipit ut, rutrum sed orci. Mauris pretium justo ut aliquet accumsan. Etiam ut quam et ligula maximus viverra sit amet at tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu ultricies erat. Proin a massa ac risus sagittis volutpat. Cras elementum tincidunt risus, sed placerat eros finibus vel. Mauris tempor lorem eu nulla vulputate feugiat. Donec accumsan risus lorem, sed lobortis dui laoreet vitae.Donec nunc odio, blandit non tempus eget, sodales in tellus. Aenean tincidunt rhoncus diam at placerat. Aenean tincidunt commodo dui, vitae pharetra ante egestas id. Sed venenatis venenatis nunc, vel interdum augue auctor sit amet. Cras quis lectus quis ante ornare pretium. Morbi pharetra massa nec diam porttitor consectetur. Aenean tincidunt orci odio. Curabitur interdum sit amet nisl sed euismod. Etiam vestibulum magna et ipsum auctor suscipit. Donec non porta risus, in tincidunt sapien. Quisque faucibus condimentum odio vel tempor. Nam luctus mi odio, ut facilisis erat ultrices ut. Cras ac tempus urna. Morbi risus tortor, facilisis at laoreet nec, imperdiet in mi.Cras elit augue, elementum a molestie eget, hendrerit porta dui. Sed sollicitudin pharetra aliquet. Cras laoreet nisl eget tempor gravida. Phasellus risus velit, scelerisque quis tempus sed, porttitor id lectus. Proin feugiat vestibulum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tincidunt sagittis porttitor. Integer ut ultricies nunc. Etiam egestas, libero id ultrices sodales, ipsum sapien euismod lacus, non tristique quam risus vitae ante. Donec lobortis diam sed eros rhoncus, at lobortis urna consectetur. Nam ac tincidunt mi. Morbi consequat, justo sit amet sagittis blandit, enim lacus pulvinar turpis, sed pharetra arcu lorem ac neque. Mauris sollicitudin libero non risus convallis sodales. Nam eget erat a urna mattis pellentesque. Suspendisse placerat viverra odio, ac semper risus convallis vel. Nullam vulputate, ipsum eu congue dapibus, ligula ligula sollicitudin sem, eget interdum diam ex non magna.Duis euismod, metus id convallis tempor, tortor libero dapibus nunc, ac sollicitudin quam odio vitae turpis. Nam sem massa, ornare at mauris ac, porta feugiat nulla. Sed at lorem leo. Morbi id massa at tellus blandit gravida. Proin aliquet, erat ut condimentum auctor, odio nibh hendrerit nisl, ac suscipit eros ligula et magna. Mauris vel lorem quam. Mauris in tortor vel purus facilisis tempor. Vivamus felis massa, dictum id ipsum blandit, dictum posuere risus. Etiam sit amet ipsum id erat finibus finibus. Morbi luctus mollis odio, id mollis ex rhoncus id. Curabitur sit amet rhoncus ex, ac laoreet nulla. Integer varius est sapien, vel faucibus sem elementum at. Etiam sed sem sed neque pharetra accumsan.Proin diam nisl, facilisis ut posuere nec, dignissim id magna. Aenean ut nisi tellus. Maecenas elit ex, dictum quis sapien rhoncus, maximus efficitur turpis. Phasellus luctus, ex eget mattis finibus, risus erat tempus neque, ac condimentum risus libero id metus. Etiam ullamcorper odio non arcu blandit tincidunt. Aliquam quis rhoncus tortor. Vestibulum ultricies, justo pretium tempus consectetur, elit nibh pharetra enim, eu ultricies velit metus et libero. Sed non leo accumsan, efficitur risus id, ullamcorper magna. Praesent at sollicitudin enim. Vestibulum mauris purus, tempor quis pharetra vel, varius at odio. Maecenas accumsan velit ut consequat aliquam.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "2. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "3. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "4. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "5. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "6. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "7. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "8. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "9. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "10. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "11. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "12. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "13. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "14. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "15. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "16. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "17. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "18. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "19. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "20. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title:
        "21. The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
  ];

  const startIndex = pagerIndex * selectedValue;
  const endIndex = startIndex + selectedValue;
  const recordsToDisplay = products.slice(startIndex, endIndex);

  const toggleAbstract = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    products.map(() => false)
  );

  const toggleCheckbox = (index) => {
    if (!selectAll) {
      setSelectedCheckboxes((prev) => {
        const updated = [...prev];
        updated[index] = !updated[index];
        return updated;
      });
    }
  };

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
      className="h-screen overflow-y-auto listheight sm:overflow-x-auto mobile:h-[76vh] md-mobile:h-[76vh] sm-mobile:h-[76vh]"
      ref={gridRef}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border-b border-b-[#0076fa]"
            >
              {/* Checkbox column */}
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-8/12 border-b border-b-[#0076fa]"
            >
              Document Title
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-2/12 border-b border-b-[#0076fa]"
            >
              Authors
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border-b border-b-[#0076fa]"
            >
              Year
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-2/12 border-b border-b-[#0076fa]"
            >
              Source
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border-b border-b-[#0076fa]"
              style={{ whiteSpace: "nowrap" }}
            >
              Cited by
            </th>
          </tr>
        </thead>
        <tbody>
          {recordsToDisplay.length > 0 ? (
            recordsToDisplay.map((product, index) => (
              <React.Fragment key={index}>
                <tr className={`bg-white hover:bg-gray-100 border-b`}>
                  <td className="px-4 py-4 text-left align-top">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectAll || selectedCheckboxes[index]}
                        onChange={() => toggleCheckbox(index)}
                        className="checkbox-input"
                      />
                      <span>{startIndex + index + 1}</span>
                    </div>
                  </td>

                  <td className="px-4 py-2 text-left align-top">
                    <p className="text-xs text-gray-500">Article</p>
                    <div className="font-medium text-gray-900">
                      {product.title}
                    </div>
                    <div className="text-xs text-blue-600 space-x-2 mt-10">
                      {product.details.map((detail, i) => (
                        <span
                          key={i}
                          className="cursor-pointer hover:underline"
                        >
                          {detail === "View abstract" ? (
                            <button
                              onClick={() => toggleAbstract(index)}
                              className="text-blue-600 hover:underline focus:outline-none"
                            >
                              {detail}
                              <FontAwesomeIcon
                                icon={
                                  expandedRowIndex === index
                                    ? faChevronUp
                                    : faChevronDown
                                }
                                className="ml-1 text-xs"
                              />
                            </button>
                          ) : detail === "Ask this paper" ? (
                            <a
                              href={`../../pdfPage/${index}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline focus:outline-none"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-left align-top">
                    <div className="font-normal text-gray-900">
                      {product.authors}
                    </div>
                    <div className="text-xs text-gray-500 space-x-1 mt-2">
                      <span className="font-semibold">Affiliated nation:</span>
                      <span>{product.afiliated_nation}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-left align-top">
                    {product.year}
                  </td>
                  <td className="px-4 py-4 text-left align-top">
                    <div className="font-normal text-gray-900">
                      {product.source}
                    </div>
                    <div className="text-xs text-gray-500 space-x-1 mt-2">
                      <span className="font-semibold text-blue-700">
                        Indexed In:
                      </span>
                      <span>{product.indexIn}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-left align-top">
                    <div className="font-normal text-gray-900">
                      {product.citedBy}
                    </div>
                    <div className="text-xs text-gray-500 space-x-1 mt-12">
                      <span className="font-semibold">Ref:</span>
                      <span>{product.ref}</span>
                    </div>
                  </td>
                </tr>
                {expandedRowIndex === index && (
                  <tr className="border-b-gray-500">
                    <td colSpan={6} className="bg-gray-100 px-3 py-4 pl-[87px]">
                      <div className="relative flex flex-col">
                        <div className="text-gray-800 mt-2 pl-2">
                          <p>{product.abstract || "No abstract available."}</p>
                        </div>
                        {product.keywords && product.keywords.length > 0 && (
                          <div className="mt-3 flex items-start pl-2">
                            <h5 className="text-md font-semibold text-gray-700 mr-2">
                              Keywords:
                            </h5>
                            <p className="text-gray-600 text-sm">
                              {product.keywords.join("; ")}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-gray-500 py-4">
                No records available for this page.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
