/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type IssuerStruct = {
  id: string;
  category: BytesLike;
  diddoc: string;
  reputation: BigNumberish;
  enabled: boolean;
  creator: string;
};

export type IssuerStructOutput = [
  string,
  string,
  string,
  BigNumber,
  boolean,
  string
] & {
  id: string;
  category: string;
  diddoc: string;
  reputation: BigNumber;
  enabled: boolean;
  creator: string;
};

export type LeafOpStruct = {
  valid: boolean;
  hash: BigNumberish;
  prehash_key: BigNumberish;
  prehash_value: BigNumberish;
  len: BigNumberish;
  prefix: BytesLike;
};

export type LeafOpStructOutput = [
  boolean,
  number,
  number,
  number,
  number,
  string
] & {
  valid: boolean;
  hash: number;
  prehash_key: number;
  prehash_value: number;
  len: number;
  prefix: string;
};

export type InnerOpStruct = {
  valid: boolean;
  hash: BigNumberish;
  prefix: BytesLike;
  suffix: BytesLike;
};

export type InnerOpStructOutput = [boolean, number, string, string] & {
  valid: boolean;
  hash: number;
  prefix: string;
  suffix: string;
};

export type ExistenceProofStruct = {
  valid: boolean;
  key: BytesLike;
  value: BytesLike;
  leaf: LeafOpStruct;
  path: InnerOpStruct[];
};

export type ExistenceProofStructOutput = [
  boolean,
  string,
  string,
  LeafOpStructOutput,
  InnerOpStructOutput[]
] & {
  valid: boolean;
  key: string;
  value: string;
  leaf: LeafOpStructOutput;
  path: InnerOpStructOutput[];
};

export interface KYXInterface extends utils.Interface {
  functions: {
    "BUSINESS()": FunctionFragment;
    "CUSTOMER()": FunctionFragment;
    "TRANSACTION()": FunctionFragment;
    "anconprotocol()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "balanceOfAt(address,uint256)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "fee()": FunctionFragment;
    "issuers(bytes32,string)": FunctionFragment;
    "issuersCount(bytes32)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stablecoin()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setPaymentToken(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawToken(address,address)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "getFee()": FunctionFragment;
    "getIssuerLength(bytes32)": FunctionFragment;
    "getIssuer(bytes32,string)": FunctionFragment;
    "registerIssuerWithProof(bytes32,bytes,(bool,bytes,bytes,(bool,uint8,uint8,uint8,uint8,bytes),(bool,uint8,bytes,bytes)[]),(bool,bytes,bytes,(bool,uint8,uint8,uint8,uint8,bytes),(bool,uint8,bytes,bytes)[]))": FunctionFragment;
    "setIssuerWithProof(bytes32,string,string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BUSINESS", values?: undefined): string;
  encodeFunctionData(functionFragment: "CUSTOMER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TRANSACTION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "anconprotocol",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "issuers",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "issuersCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPaymentToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getIssuerLength",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuer",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerIssuerWithProof",
    values: [BytesLike, BytesLike, ExistenceProofStruct, ExistenceProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setIssuerWithProof",
    values: [BytesLike, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "BUSINESS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CUSTOMER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TRANSACTION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "anconprotocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issuers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issuersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIssuerLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getIssuer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerIssuerWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIssuerWithProof",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256)": EventFragment;
    "IssuerAdded(string,bytes32,string)": EventFragment;
    "Mint(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, BigNumber],
  { _from: string; _amount: BigNumber }
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export type IssuerAddedEvent = TypedEvent<
  [string, string, string],
  { id: string; category: string; diddoc: string }
>;

export type IssuerAddedEventFilter = TypedEventFilter<IssuerAddedEvent>;

export type MintEvent = TypedEvent<
  [string, BigNumber],
  { _to: string; _amount: BigNumber }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  { payee: string; weiAmount: BigNumber }
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface KYX extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KYXInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BUSINESS(overrides?: CallOverrides): Promise<[string]>;

    CUSTOMER(overrides?: CallOverrides): Promise<[string]>;

    TRANSACTION(overrides?: CallOverrides): Promise<[string]>;

    anconprotocol(overrides?: CallOverrides): Promise<[string]>;

    /**
     * return the reputation amount of a given owner
     * @param _owner an address of the owner which we want to get his reputation
     */
    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    /**
     * Queries the balance of `_owner` at a specific `_blockNumber`
     * @param _blockNumber The block number when the balance is queried
     * @param _owner The address from which the balance will be retrieved
     */
    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Burns `_amount` reputation from `_owner`
     * @param _amount The quantity of reputation to burn
     * @param _user The address that will lose the reputation
     */
    burn(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    issuers(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, boolean, string] & {
        id: string;
        category: string;
        diddoc: string;
        reputation: BigNumber;
        enabled: boolean;
        creator: string;
      }
    >;

    issuersCount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Generates `_amount` reputation that are assigned to `_owner`
     * @param _amount The quantity of reputation generated
     * @param _user The address that will be assigned the new reputation
     */
    mint(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stablecoin(overrides?: CallOverrides): Promise<[string]>;

    /**
     * This function makes it easy to get the total number of reputation
     */
    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Total amount of reputation at a specific `_blockNumber`.
     * @param _blockNumber The block number when the totalSupply is queried
     */
    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaymentToken(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      payee: string,
      erc20token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIssuerLength(
      category: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIssuer(
      category: BytesLike,
      id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerIssuerWithProof(
      moniker: BytesLike,
      packet: BytesLike,
      userProof: ExistenceProofStruct,
      packetProof: ExistenceProofStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIssuerWithProof(
      category: BytesLike,
      issuerID: string,
      diddocUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BUSINESS(overrides?: CallOverrides): Promise<string>;

  CUSTOMER(overrides?: CallOverrides): Promise<string>;

  TRANSACTION(overrides?: CallOverrides): Promise<string>;

  anconprotocol(overrides?: CallOverrides): Promise<string>;

  /**
   * return the reputation amount of a given owner
   * @param _owner an address of the owner which we want to get his reputation
   */
  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Queries the balance of `_owner` at a specific `_blockNumber`
   * @param _blockNumber The block number when the balance is queried
   * @param _owner The address from which the balance will be retrieved
   */
  balanceOfAt(
    _owner: string,
    _blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Burns `_amount` reputation from `_owner`
   * @param _amount The quantity of reputation to burn
   * @param _user The address that will lose the reputation
   */
  burn(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  issuers(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, boolean, string] & {
      id: string;
      category: string;
      diddoc: string;
      reputation: BigNumber;
      enabled: boolean;
      creator: string;
    }
  >;

  issuersCount(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Generates `_amount` reputation that are assigned to `_owner`
   * @param _amount The quantity of reputation generated
   * @param _user The address that will be assigned the new reputation
   */
  mint(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stablecoin(overrides?: CallOverrides): Promise<string>;

  /**
   * This function makes it easy to get the total number of reputation
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Total amount of reputation at a specific `_blockNumber`.
   * @param _blockNumber The block number when the totalSupply is queried
   */
  totalSupplyAt(
    _blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaymentToken(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    payee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    payee: string,
    erc20token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIssuerLength(
    category: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIssuer(
    category: BytesLike,
    id: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerIssuerWithProof(
    moniker: BytesLike,
    packet: BytesLike,
    userProof: ExistenceProofStruct,
    packetProof: ExistenceProofStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIssuerWithProof(
    category: BytesLike,
    issuerID: string,
    diddocUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BUSINESS(overrides?: CallOverrides): Promise<string>;

    CUSTOMER(overrides?: CallOverrides): Promise<string>;

    TRANSACTION(overrides?: CallOverrides): Promise<string>;

    anconprotocol(overrides?: CallOverrides): Promise<string>;

    /**
     * return the reputation amount of a given owner
     * @param _owner an address of the owner which we want to get his reputation
     */
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Queries the balance of `_owner` at a specific `_blockNumber`
     * @param _blockNumber The block number when the balance is queried
     * @param _owner The address from which the balance will be retrieved
     */
    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Burns `_amount` reputation from `_owner`
     * @param _amount The quantity of reputation to burn
     * @param _user The address that will lose the reputation
     */
    burn(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    issuers(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, boolean, string] & {
        id: string;
        category: string;
        diddoc: string;
        reputation: BigNumber;
        enabled: boolean;
        creator: string;
      }
    >;

    issuersCount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Generates `_amount` reputation that are assigned to `_owner`
     * @param _amount The quantity of reputation generated
     * @param _user The address that will be assigned the new reputation
     */
    mint(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stablecoin(overrides?: CallOverrides): Promise<string>;

    /**
     * This function makes it easy to get the total number of reputation
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Total amount of reputation at a specific `_blockNumber`.
     * @param _blockNumber The block number when the totalSupply is queried
     */
    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPaymentToken(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    withdrawToken(
      payee: string,
      erc20token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuerLength(
      category: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIssuer(
      category: BytesLike,
      id: string,
      overrides?: CallOverrides
    ): Promise<IssuerStructOutput>;

    registerIssuerWithProof(
      moniker: BytesLike,
      packet: BytesLike,
      userProof: ExistenceProofStruct,
      packetProof: ExistenceProofStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    setIssuerWithProof(
      category: BytesLike,
      issuerID: string,
      diddocUri: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Burn(address,uint256)"(
      _from?: string | null,
      _amount?: null
    ): BurnEventFilter;
    Burn(_from?: string | null, _amount?: null): BurnEventFilter;

    "IssuerAdded(string,bytes32,string)"(
      id?: string | null,
      category?: BytesLike | null,
      diddoc?: null
    ): IssuerAddedEventFilter;
    IssuerAdded(
      id?: string | null,
      category?: BytesLike | null,
      diddoc?: null
    ): IssuerAddedEventFilter;

    "Mint(address,uint256)"(
      _to?: string | null,
      _amount?: null
    ): MintEventFilter;
    Mint(_to?: string | null, _amount?: null): MintEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Withdrawn(address,uint256)"(
      payee?: string | null,
      weiAmount?: null
    ): WithdrawnEventFilter;
    Withdrawn(payee?: string | null, weiAmount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    BUSINESS(overrides?: CallOverrides): Promise<BigNumber>;

    CUSTOMER(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSACTION(overrides?: CallOverrides): Promise<BigNumber>;

    anconprotocol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * return the reputation amount of a given owner
     * @param _owner an address of the owner which we want to get his reputation
     */
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Queries the balance of `_owner` at a specific `_blockNumber`
     * @param _blockNumber The block number when the balance is queried
     * @param _owner The address from which the balance will be retrieved
     */
    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Burns `_amount` reputation from `_owner`
     * @param _amount The quantity of reputation to burn
     * @param _user The address that will lose the reputation
     */
    burn(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    issuers(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issuersCount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Generates `_amount` reputation that are assigned to `_owner`
     * @param _amount The quantity of reputation generated
     * @param _user The address that will be assigned the new reputation
     */
    mint(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stablecoin(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function makes it easy to get the total number of reputation
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Total amount of reputation at a specific `_blockNumber`.
     * @param _blockNumber The block number when the totalSupply is queried
     */
    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaymentToken(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      payee: string,
      erc20token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIssuerLength(
      category: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIssuer(
      category: BytesLike,
      id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerIssuerWithProof(
      moniker: BytesLike,
      packet: BytesLike,
      userProof: ExistenceProofStruct,
      packetProof: ExistenceProofStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIssuerWithProof(
      category: BytesLike,
      issuerID: string,
      diddocUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BUSINESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CUSTOMER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TRANSACTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    anconprotocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * return the reputation amount of a given owner
     * @param _owner an address of the owner which we want to get his reputation
     */
    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Queries the balance of `_owner` at a specific `_blockNumber`
     * @param _blockNumber The block number when the balance is queried
     * @param _owner The address from which the balance will be retrieved
     */
    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Burns `_amount` reputation from `_owner`
     * @param _amount The quantity of reputation to burn
     * @param _user The address that will lose the reputation
     */
    burn(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuers(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuersCount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Generates `_amount` reputation that are assigned to `_owner`
     * @param _amount The quantity of reputation generated
     * @param _user The address that will be assigned the new reputation
     */
    mint(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This function makes it easy to get the total number of reputation
     */
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Total amount of reputation at a specific `_blockNumber`.
     * @param _blockNumber The block number when the totalSupply is queried
     */
    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaymentToken(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      payee: string,
      erc20token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIssuerLength(
      category: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIssuer(
      category: BytesLike,
      id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerIssuerWithProof(
      moniker: BytesLike,
      packet: BytesLike,
      userProof: ExistenceProofStruct,
      packetProof: ExistenceProofStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIssuerWithProof(
      category: BytesLike,
      issuerID: string,
      diddocUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
