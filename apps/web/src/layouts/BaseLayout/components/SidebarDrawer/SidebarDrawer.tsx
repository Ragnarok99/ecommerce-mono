import { Drawer } from 'ui';

interface SideBarDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideBarDrawer = ({ isOpen, onClose }: SideBarDrawerProps) => (
  <Drawer isOpen={isOpen} onClose={onClose}>
    hola
  </Drawer>
);

export default SideBarDrawer;
