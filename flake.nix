{
  description = "A very basic flake to my react-native set up";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-21.05;
  };


  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShell.${system} = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs-14_x
          nodePackages.expo-cli
        ];
      };

    };

}
