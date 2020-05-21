import ISendMailDTO from '../dtos/ISendMail';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
