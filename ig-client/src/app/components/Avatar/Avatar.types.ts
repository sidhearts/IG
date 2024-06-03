export interface AvatarProps {
  /**
   * source of image which is used for avatar
   */
  src: string;
  /**
   * Name is used as alt text of avatar
   */
  name: string;
  /**
   * border type for border around the avatar
   */
  borderType: 'gradient' | 'default';
  /**
   * Size of avatar
   * @default medium
   */
  size?: 'small' | 'medium'
}
