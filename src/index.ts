export {};

declare global {
  interface String {
    /**
     * @description Transforms your string to lowercase
     * @returns {string} string
     */
    lower(): string;
    /**
     * @description Transforms your string to lowercase
     * @returns {string} string
     */
    l(): string;
    /**
     * @description Transforms your string to UPPERCASE
     * @returns {string} string
     */
    upper(): string;
    /**
     * @description Transforms your string to UPPERCASE
     * @returns {string} string
     */
    u(): string;
    /**
     * @description Transforms your string to Capitalize
     * @param e index/es to transform
     * @returns {string} string
     */
    capitalize(e?: number | number[]): string;
  }
}
