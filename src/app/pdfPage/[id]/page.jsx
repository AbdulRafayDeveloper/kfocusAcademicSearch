"use client";
import Header from "../../components/header/Header";
//import Footer from "../../components/header/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../../components/sideBar/Sidebar";
import React, { useState, useEffect } from "react";
import Filters from "../../components/filters/Filters";
import MoreFilters from "../../components/moreFilters/MoreFilters";
import Footer from "@/app/components/footer/Footer";
import DataDisplayToPDF from "@/app/components/dataToPdf/DataDisplayToPDF";
import { useSearchParams, usePathname } from "next/navigation";
import Loader from "@/app/components/loader/Loader";

const page = ({ params }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState();
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [closeChat, setCloseChat] = useState(false);

  const toggleChat = () => {
    setCloseChat(!closeChat);
  };

  const products = [
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel vulputate orci, id malesuada neque. Nulla vel quam sit amet dui convallis ultricies. Maecenas tempus tellus a est condimentum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel luctus purus. Proin neque nunc, fringilla sit amet dapibus in, sollicitudin sed dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci mi, varius tincidunt nunc vel, vulputate dictum est. Vivamus auctor quam facilisis lobortis lacinia. Maecenas eget ex dictum leo cursus varius quis eu est. Donec cursus venenatis tortor vitae lobortis.Suspendisse augue eros, efficitur et venenatis vitae, accumsan vitae turpis. Aenean ut dapibus ante, at maximus lacus. Aliquam imperdiet vehicula felis sed luctus. Nunc vitae egestas sem. Proin a pulvinar quam. Nam lobortis ornare ornare. Nulla vitae ultricies ligula. Aliquam hendrerit velit eget eros sollicitudin tempor. In hac habitasse platea dictumst.Praesent quis neque ultricies, feugiat nisl vitae, cursus diam. Sed et lectus nec mauris malesuada mattis. Nullam at mauris a sapien aliquam pharetra. Vivamus dictum, ligula vitae placerat porttitor, metus erat tincidunt quam, at congue elit mauris a velit. Maecenas venenatis mi sed rhoncus dictum. Praesent rutrum mauris sit amet mauris molestie ullamcorper. Vivamus malesuada consequat consectetur.Fusce turpis sapien, condimentum vel tellus in, vulputate rutrum ligula. Quisque id velit vitae tellus hendrerit porttitor ut eu felis. Maecenas facilisis efficitur rhoncus. Mauris rhoncus nec velit quis condimentum. Duis ultrices dui sit amet leo tincidunt dictum. Donec enim nibh, vulputate rutrum felis suscipit, vehicula vestibulum libero. Nulla nec enim volutpat, mollis ipsum eget, eleifend nibh. Praesent non quam in ex dignissim feugiat eu auctor enim. Nam varius vestibulum massa eget efficitur. Nam ex nibh, tempor vel lectus vitae, dignissim malesuada mi. Sed eu dapibus velit. Pellentesque vulputate mattis aliquet.Aliquam pellentesque ipsum eu dapibus molestie. Quisque dolor enim, placerat vel magna gravida, venenatis dignissim augue. Proin bibendum felis justo, a ullamcorper massa aliquam vitae. Vivamus nec luctus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi elementum sapien felis, eu interdum nisl tincidunt ut. Aliquam quis sagittis metus, sit amet interdum lacus. Sed id fermentum dui, at fringilla quam. Donec id lorem et turpis efficitur hendrerit. Donec eros odio, iaculis eget gravida sed, faucibus varius nulla. Vivamus malesuada elit libero, aliquam venenatis nunc fermentum in. Aenean volutpat nec felis nec pharetra. Maecenas ac ante at mi vulputate commodo.Nullam congue arcu non condimentum malesuada. Quisque molestie posuere blandit. Aenean velit arcu, fermentum ac blandit sit amet, fermentum ut augue. Sed hendrerit orci sit amet libero scelerisque ornare. Nulla interdum lacus neque, quis facilisis est tristique ut. Mauris sodales metus elit, quis efficitur neque ornare at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nibh nisi, condimentum eu suscipit ut, rutrum sed orci. Mauris pretium justo ut aliquet accumsan. Etiam ut quam et ligula maximus viverra sit amet at tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu ultricies erat. Proin a massa ac risus sagittis volutpat. Cras elementum tincidunt risus, sed placerat eros finibus vel. Mauris tempor lorem eu nulla vulputate feugiat. Donec accumsan risus lorem, sed lobortis dui laoreet vitae.Donec nunc odio, blandit non tempus eget, sodales in tellus. Aenean tincidunt rhoncus diam at placerat. Aenean tincidunt commodo dui, vitae pharetra ante egestas id. Sed venenatis venenatis nunc, vel interdum augue auctor sit amet. Cras quis lectus quis ante ornare pretium. Morbi pharetra massa nec diam porttitor consectetur. Aenean tincidunt orci odio. Curabitur interdum sit amet nisl sed euismod. Etiam vestibulum magna et ipsum auctor suscipit. Donec non porta risus, in tincidunt sapien. Quisque faucibus condimentum odio vel tempor. Nam luctus mi odio, ut facilisis erat ultrices ut. Cras ac tempus urna. Morbi risus tortor, facilisis at laoreet nec, imperdiet in mi.Cras elit augue, elementum a molestie eget, hendrerit porta dui. Sed sollicitudin pharetra aliquet. Cras laoreet nisl eget tempor gravida. Phasellus risus velit, scelerisque quis tempus sed, porttitor id lectus. Proin feugiat vestibulum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tincidunt sagittis porttitor. Integer ut ultricies nunc. Etiam egestas, libero id ultrices sodales, ipsum sapien euismod lacus, non tristique quam risus vitae ante. Donec lobortis diam sed eros rhoncus, at lobortis urna consectetur. Nam ac tincidunt mi. Morbi consequat, justo sit amet sagittis blandit, enim lacus pulvinar turpis, sed pharetra arcu lorem ac neque. Mauris sollicitudin libero non risus convallis sodales. Nam eget erat a urna mattis pellentesque. Suspendisse placerat viverra odio, ac semper risus convallis vel. Nullam vulputate, ipsum eu congue dapibus, ligula ligula sollicitudin sem, eget interdum diam ex non magna.Duis euismod, metus id convallis tempor, tortor libero dapibus nunc, ac sollicitudin quam odio vitae turpis. Nam sem massa, ornare at mauris ac, porta feugiat nulla. Sed at lorem leo. Morbi id massa at tellus blandit gravida. Proin aliquet, erat ut condimentum auctor, odio nibh hendrerit nisl, ac suscipit eros ligula et magna. Mauris vel lorem quam. Mauris in tortor vel purus facilisis tempor. Vivamus felis massa, dictum id ipsum blandit, dictum posuere risus. Etiam sit amet ipsum id erat finibus finibus. Morbi luctus mollis odio, id mollis ex rhoncus id. Curabitur sit amet rhoncus ex, ac laoreet nulla. Integer varius est sapien, vel faucibus sem elementum at. Etiam sed sem sed neque pharetra accumsan.Proin diam nisl, facilisis ut posuere nec, dignissim id magna. Aenean ut nisi tellus. Maecenas elit ex, dictum quis sapien rhoncus, maximus efficitur turpis. Phasellus luctus, ex eget mattis finibus, risus erat tempus neque, ac condimentum risus libero id metus. Etiam ullamcorper odio non arcu blandit tincidunt. Aliquam quis rhoncus tortor. Vestibulum ultricies, justo pretium tempus consectetur, elit nibh pharetra enim, eu ultricies velit metus et libero. Sed non leo accumsan, efficitur risus id, ullamcorper magna. Praesent at sollicitudin enim. Vestibulum mauris purus, tempor quis pharetra vel, varius at odio. Maecenas accumsan velit ut consequat aliquam.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
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
        "Abstracts contain most of the following kinds of information in brief form. The body of your paper will, of course, develop and explain these ideas much more fully. As you will see in the samples below, the proportion of your abstract that you devote to each kind of information—and the sequence of that information—will vary, depending on the nature and genre of the paper that you are summarizing in your abstract. And in some cases, some of this information is implied, rather than stated explicitly. The Publication Manual of the American Psychological Association, which is widely used in the social sciences, gives specific guidelines for what to include in the abstract for different kinds of papers—for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers, and case studies.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen((prevState) => !prevState);
  };

  const [selectedFilter, setSelectedFilter] = useState(false);
  const [selectedFilterindex, setSelectedFilterIndex] = useState(false);
  const toggleSideFilter = (index) => {
    console.log(index);
    setSelectedFilter(!selectedFilter);
    setSelectedFilterIndex(index);
  };

  const filterCategories = [
    {
      name: "Date Range",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Last ${index + 1} years`,
        value: index + 1,
      })),
    },
    {
      name: "Content Type",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Content Type ${index + 1}`,
        value: index + 1,
      })),
    },
    {
      name: "Quick Filters",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Quick Filter ${index + 1}`,
        value: index + 1,
      })),
    },
    {
      name: "Publication Years",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `${2023 - index}`,
        value: 2023 - index,
      })),
    },
    {
      name: "Keywords",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Keyword ${index + 1}`,
        value: `keyword_${index + 1}`,
      })),
    },
    {
      name: "KeyWords Plus",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Keyword Plus ${index + 1}`,
        value: `keyword_plus_${index + 1}`,
      })),
    },
    {
      name: "Research Areas",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Area ${index + 1}`,
        value: `area_${index + 1}`,
      })),
    },
    {
      name: "Subject Area / Disciplines",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Subject ${index + 1}`,
        value: `subject_${index + 1}`,
      })),
    },
    {
      name: "Sustainable Development Goals",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Goal ${index + 1}`,
        value: `goal_${index + 1}`,
      })),
    },
    {
      name: "Source Title",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source ${index + 1}`,
        value: `source_${index + 1}`,
      })),
    },
    {
      name: "Source Type",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source Type ${index + 1}`,
        value: `source_type_${index + 1}`,
      })),
    },
    {
      name: "Publisher",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Publisher ${index + 1}`,
        value: `publisher_${index + 1}`,
      })),
    },
    {
      name: "Author(s)",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Author ${index + 1}`,
        value: `author_${index + 1}`,
      })),
    },
    {
      name: "Institute / Affiliations",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institute ${index + 1}`,
        value: `institute_${index + 1}`,
      })),
    },
    {
      name: "Funder",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Funder ${index + 1}`,
        value: `funder_${index + 1}`,
      })),
    },
    {
      name: "Country/Territory",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Country ${index + 1}`,
        value: `country_${index + 1}`,
      })),
    },
    {
      name: "MeSH Heading",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `MeSH Heading ${index + 1}`,
        value: `mesh_${index + 1}`,
      })),
    },
    {
      name: "Chemical Substance",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Substance ${index + 1}`,
        value: `substance_${index + 1}`,
      })),
    },
    {
      name: "Language",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Language ${index + 1}`,
        value: `language_${index + 1}`,
      })),
    },
    {
      name: "Article Status",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Article Status ${index + 1}`,
        value: `article_status_${index + 1}`,
      })),
    },
    {
      name: "Top Institutions Logo Grid",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institution ${index + 1}`,
        value: `institution_${index + 1}`,
      })),
    },
  ];

  const categoryMatch = filterCategories.find(
    (category, index) => category.name === selectedFilterindex
  );
  console.log("categoryMatch:", categoryMatch);

  let selectedFilterOptions =
    selectedFilterindex !== null ? categoryMatch?.options : [];
  console.log("selectedFilterOptions:", selectedFilterOptions);

  console.log("selected filer: ", selectedFilterOptions);
  if (Array.isArray(selectedFilterOptions)) {
    selectedFilterOptions = [...selectedFilterOptions, selectedFilterindex];
  } else {
    selectedFilterOptions = [selectedFilterindex];
  }

  const [loading, setLoading] = useState(true); // Track loading state

  const param = React.use(params); // Correct way to unwrap params in Next.js 13+
  console.log("id: ", param.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = products[param.id]; // Fetch product by ID from the products array
        setSelectedProduct(product); // Set the selected product
        console.log(param.id);
        setLoading(false); // Data is loaded, set loading to false
      } catch (e) {
        console.log("Error fetching data:", e);
        setLoading(false); // Even on error, stop loading
      }
    };

    if (param && param.id) {
      fetchData();
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!selectedProduct) {
    return <p>Product not found or there was an error.</p>;
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
    >
      <div className="flex flex-grow ">
        <div className="flex mobile:w-[88%] md-mobile:w-[88%] sm-mobile:w-[88%] laptop:w-full flex-col ">
          <div className="flex w-full">
            {/* Sidebar */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isSidebarVisible
                  ? "laptop:w-[300px] mobile:w-[200px] z-[9999] bg-white shadow-lg"
                  : "laptop:w-0 w-0"
              } laptop:block laptop:static fixed mobile:top-10 mobile:left-12 h-full`}
            >
              <SidebarFilters
                activeCategory={activeCategory}
                changeActiveCategory={changeActiveCategory}
                toggleSideFilter={toggleSideFilter}
                className="overflow-y-scroll "
                filterCategories={filterCategories}
              />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-row h-screen laptop:flex mobile:overflow-x-auto md-mobile:overflow-x-auto sm-mobile:overflow-x-auto">
              {/* Left section with more width */}
              <div className="flex-grow laptop:min-w-[50vw] mobile:min-w-[160vw] md-mobile:min-w-[160vw] sm-mobile:min-w-[160vw] p-4">
                <DataDisplayToPDF
                  data={selectedProduct}
                  toggleChat={toggleChat}
                  closeChat={closeChat}
                />
              </div>

              {/* Right section with smaller width */}
              <div
                className={`${
                  closeChat
                    ? "hidden"
                    : "laptop:min-w-[25vw] mobile:min-w-[90vw] md-mobile:min-w-[90vw] sm-mobile:min-w-[90vw]"
                } bg-white flex flex-col h-screen overflow-y-auto p-4`}
              >
                <div className="flex flex-row justify-between mt-4 items-center border-b border-gray-300 pb-4">
                  <div className="flex flex-row items-end gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                    <p>Ask paper</p>
                    <span className="text-blue-600 p-[0.5] py-[0.5px] px-2 bg-blue-100 font-normal text-xs flex-shrink-0 rounded-lg mb-[2px]">
                      Beta
                    </span>
                  </div>
                  <button onClick={toggleChat}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Centered text */}
                <div className="flex-grow flex justify-center items-center text-center">
                  <p className="text-[#7295a7]">
                    What would you like to know
                    <br />
                    about this paper?
                  </p>
                </div>

                {/* Footer at the bottom */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center bg-[#dfeeff] px-5 py-2 rounded-l-lg rounded-tr-lg">
                      <p className="text-base truncate font-light">
                        Summarize the paper in few sentence
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-row justify-between items-center bg-[#dfeeff] px-5 py-2 rounded-l-lg rounded-tr-lg">
                      <p className="text-base truncate font-light">
                        Were there any conflicts of interest?
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-row justify-between items-center bg-[#dfeeff] px-5 py-2 rounded-l-lg rounded-tr-lg">
                      <p className="text-base truncate font-light">
                        Did the author mention limitations?
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <form className="max-w-md mx-auto w-full">
                    <div className="relative">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ask this paper..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-[#79c2f7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 mt-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <p className="text-[#c7d9e1] text-center text-xs">
                    4 messages left, Reset to 10 on January 12th
                    <span className="underline"> Upgrade for unlimited</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
