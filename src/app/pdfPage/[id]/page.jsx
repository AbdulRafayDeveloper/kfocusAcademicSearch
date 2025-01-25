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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = products[param.id]; // Fetch product by ID from the products array
        setSelectedProduct(product); // Set the selected product
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
      <div
        className={`absolute top-0 right-0 z-40 bg-white transition-transform duration-300 ${
          isFilterSidebarOpen ? "translate-x-0 w-72" : "hidden"
        }`}
      >
        <Filters toggleFilterSidebar={toggleFilterSidebar} />
      </div>
      <div
        className={`absolute top-[138px] right-0 z-40 bg-white transition-transform duration-300 ${
          selectedFilter ? "translate-x-0 w-[730px]" : "hidden"
        }`}
      >
        <MoreFilters
          ListOfFilters={selectedFilterOptions}
          toggleSideFilter={toggleSideFilter}
        />
      </div>

      <div className="flex flex-grow overflow-">
        <div className="w-1/16 pt-[0.5px] overflow-y-auto flex flex-col ">
          <a
            href=""
            className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700 hover:bg-white px-4 py-4 transition duration-200 "
            onClick={() => {
              toggleSidebar();
              changeActiveCategory();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
          <a
            href="#"
            className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 ${
              activeCategory === "filter"
                ? "bg-white"
                : "hover:bg-white hover:text-blue-700"
            }`}
            onClick={() => changeActiveCategory()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </a>

          <a
            href="#"
            className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 ${
              activeCategory === "person"
                ? "bg-white"
                : "hover:bg-white hover:text-blue-700"
            }`}
            onClick={() => changeActiveCategory("person")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
          <a
            href=""
            className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
            onClick={() => changeActiveCategory("info")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </a>
          <a
            href=""
            className="flex items-center justify-center text-xl text-gray-800 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
            onClick={() => changeActiveCategory("ellipsis")}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </a>
        </div>

        <div className="flex w-full flex-col ">
          <div className="flex w-full">
            {/* Sidebar */}
            <div
              className={`${
                isSidebarVisible ? "w-[300px] " : "w-0"
              } fixed transition-all duration-300 overflow-hidden z-[999] `}
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
            <div className="flex flex-row h-screen">
              {/* Left section with more width */}
              <div className="flex-grow w-1/2">
                <DataDisplayToPDF data={selectedProduct} />
              </div>

              {/* Right section with more width */}
              <div className="w-1/4 bg-white flex flex-col h-screen overflow-y-auto">
                <div className="flex flex-row justify-between mt-4 items-center border-b border-gray-300 pb-4 p-4">
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
                  <button>
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
                <div className="flex flex-col items-center gap-4 p-4 ">
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
                        className="w-5 h-5 "
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
                    4 messages left,Reset to 10 on January 12th
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
