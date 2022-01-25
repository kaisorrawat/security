import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
// import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
// import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import storeIcon from '@iconify/icons-mdi/store';
import cropFree from '@iconify/icons-mdi/crop-free';
import selectOutlined from '@iconify/icons-ant-design/select-outlined';
import projectFilled from '@iconify/icons-ant-design/project-filled';
import bankPlus from '@iconify/icons-mdi/bank-plus';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'หน้าหลัก',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'รายงานผลิตภัณฑ์',
    path: '/reportOrder',
    icon: getIcon(bankPlus)
  },
  {
    title: 'ลูกค้า',
    path: '/customer',
    icon: getIcon(personAddFill)
  },
  {
    title: 'โครงการ',
    path: '/project',
    icon: getIcon(projectFilled)
  },
  {
    title: 'ผลิตภัณฑ์',
    path: '/product',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'คลังสินค้า',
    path: '/stock',
    icon: getIcon(storeIcon)
  },
  {
    title: 'QR code',
    path: '/qrcode',
    icon: getIcon(cropFree)
  },
  // {
  //   title: 'เบิกสินค้า',
  //   path: '/cutstock',
  //   icon: getIcon(selectOutlined)
  // },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon(peopleFill)
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
